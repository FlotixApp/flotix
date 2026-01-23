// Engine.tsx

import "./nodeRegistration"; // side-effect: registers nodes + fills nodeCatalog
import React, { useContext, useEffect, useMemo, useState } from "react";
import ContextMenu, { ContextMenuItem } from "./ContextMenu";
import { getNodeComponent } from "./NodeRegistry";
import { nodeCatalog } from "./nodeRegistration";
import { useNodeEngine } from "./NodeEngineContext";
import { ConnectionContext } from "./Connections";

const Engine: React.FC = () => {
  const [addDependencyFunction, setAddDependencyFunction] = useState<
    ((id: string, f: (value: any) => void) => void) | undefined
  >(undefined);

  const [removeDependencyFunction, setRemoveDependencyFunction] = useState<
    ((id: string) => void) | undefined
  >(undefined);

  const [updateInputFunction, setUpdateInputFunction] = useState<
    ((value: any) => void) | undefined
  >(undefined);

  const [selectedInputId, setSelectedInputId] = useState<string | null>(null);
  const [selectedInputType, setSelectedInputType] = useState<string | null>(null);

  const [selectedOutputId, setSelectedOutputId] = useState<string | null>(null);
  const [selectedOutputType, setSelectedOutputType] = useState<string | null>(null);

  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>([]);

  const { createNode, nodes, removeNode, setSelectedNode } = useNodeEngine();
  const _connections = useContext(ConnectionContext); // you currently don’t use most of these

  // If you need this later, compute safely:
  const catalogItems = useMemo(() => nodeCatalog, []);
  // (nodeCatalog is a module-level mutable array; with eager glob it’s effectively stable)

  useEffect(() => {
    const haveInput =
      !!selectedInputId && !!selectedInputType && !!addDependencyFunction && !!updateInputFunction;
    const haveOutput = !!selectedOutputId && !!selectedOutputType;

    if (!haveInput || !haveOutput) return;

    if (selectedInputType !== selectedOutputType) {
      // If you want, you can flash an error / toast here
      return;
    }

    // Connect output → input
    addDependencyFunction(selectedInputId!, updateInputFunction!);

    // Reset all connection-selection state
    setSelectedInputId(null);
    setSelectedInputType(null);
    setSelectedOutputId(null);
    setSelectedOutputType(null);
    setAddDependencyFunction(undefined);
    setRemoveDependencyFunction(undefined);
    setUpdateInputFunction(undefined);
  }, [
    selectedInputId,
    selectedInputType,
    selectedOutputId,
    selectedOutputType,
    addDependencyFunction,
    updateInputFunction,
  ]);

  const openContextMenu = (position: { x: number; y: number }, items: ContextMenuItem[]) => {
    setContextMenuOpen(true);
    setContextMenuPosition(position);
    setContextMenuItems(items);
  };

  const closeContextMenu = () => {
    setContextMenuOpen(false);
    setContextMenuItems([]);
  };

  return (
    // Make this the positioned stage so absolute children anchor correctly
    <div
      className="relative w-full h-screen"
      style={{ zIndex: 0 }}
      onContextMenu={(e) => {
        e.preventDefault();

        // Don't open stage context menu when right-clicking inside a node
        const target = e.target as HTMLElement;
        if (target.closest(".node")) return;

        const items: ContextMenuItem[] = catalogItems.map((n) => ({
          label: n.label,
          category: n.category,
          onClick: () => {
            createNode(n.type, { x: e.clientX, y: e.clientY });
            closeContextMenu();
          },
        }));

        openContextMenu({ x: e.clientX, y: e.clientY }, items);
      }}
    >
      {/* Nodes layer */}
      {nodes.map((node) => {
        const NodeComponent = getNodeComponent(node.type);

        if (!NodeComponent) {
          if (import.meta.env.DEV) {
            return (
              <div
                key={node.id}
                className="absolute text-xs text-red-400 bg-zinc-900 border border-red-700 p-2"
                style={{ left: node.x, top: node.y }}
              >
                Missing node type: {node.type}
              </div>
            );
          }
          return null;
        }

        return (
          <NodeComponent
            key={node.id}
            id={node.id}
            label={nodeCatalog.find((n) => n.type === node.type).label}
            setAddDependencyFunction={setAddDependencyFunction}
            addDependencyFunction={addDependencyFunction}
            setRemoveDependencyFunction={setRemoveDependencyFunction}
            removeDependencyFunction={removeDependencyFunction}
            setUpdateInputFunction={setUpdateInputFunction}
            setSelectedInputId={setSelectedInputId}
            setSelectedInputType={setSelectedInputType}
            setSelectedOutputId={setSelectedOutputId}
            setSelectedOutputType={setSelectedOutputType}
            setSelectedNode={setSelectedNode}
            selectedInputId={selectedInputId}
            selectedOutputId={selectedOutputId}
            selectedOutputType={selectedOutputType}
            openContextMenu={openContextMenu}
            removeNode={() => removeNode(node.id)}
            style={{ position: "absolute", left: node.x, top: node.y }}
          />
        );
      })}

      {/* Context menu overlay */}
      <ContextMenu
        isOpen={contextMenuOpen}
        position={contextMenuPosition}
        onClose={closeContextMenu}
        items={contextMenuItems}
      />
    </div>
  );
};

export default Engine;
