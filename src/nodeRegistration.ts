// nodeRegistration.ts

import type { ComponentType } from "react";
import { registerNode } from "./NodeRegistry";
import type { NodeProps } from "./NodeRegistry"; // export NodeProps from NodeRegistry

export type NodeMeta = {
  type: string;
  category: string;
  label: string;
  component: ComponentType<NodeProps>;
  description?: string;
};

export const nodeCatalog: NodeMeta[] = [];

// If you want node modules to optionally export metadata:
type NodeModule = {
  default?: ComponentType<NodeProps>;
  meta?: Partial<Pick<NodeMeta, "category" | "label" | "description" | "type">>;
};

function toTitleLabel(input: string): string {
  // Unify separators first
  let s = input.replace(/[_\s]+/g, " ").trim();

  // Split camelCase + boundaries like GDPCurrent
  s = s
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")        // fooBar -> foo Bar, 3DPlot -> 3 DPlot
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")     // GDPCurrent -> GDP Current
    .replace(/([a-zA-Z])([0-9])/g, "$1 $2")        // Foo2024 -> Foo 2024
    .replace(/([0-9])([a-zA-Z])/g, "$1 $2")        // 2024Foo -> 2024 Foo
    .trim();

  // Special-case common tokens (extend as needed)
  // Turn "3 d" or "3D" variants into "3D"
  s = s.replace(/\b3\s*d\b/gi, "3D");

  // Title-case each word, but preserve ALL-CAPS acronyms (NA, GDP, SQL, etc.)
  const words = s.split(/\s+/).filter(Boolean);
  const titled = words.map((w) => {
    if (/^[A-Z0-9]+$/.test(w)) return w; // keep acronyms
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  });

  return titled.join(" ");
}

function normalizeType(folderPath: string, rawName: string): string {
  const fp = folderPath
    .replace(/\\/g, "/")
    .replace(/^\.\//, "")
    .replace(/^\/+|\/+$/g, "");

  const rn = rawName.trim();

  return `${fp}/${rn}`.toLowerCase();
}

const modules = import.meta.glob<NodeModule>("./nodes/**/Node*.tsx", { eager: true });

const seenTypes = new Set<string>();

for (const path in modules) {
  const mod = modules[path];
  const Component = mod?.default;

  // ./nodes/Math/Arithmetic/NodeAdd.tsx
  const match = path.match(/^\.\/nodes\/(.*)\/Node(.*?)\.tsx$/);
  if (!match) continue;

  const folderPath = match[1]; // "Math/Arithmetic"
  const rawName = match[2];    // "Add"

  const computedType = normalizeType(folderPath, rawName);
  const computedCategory = folderPath.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  const computedLabel = toTitleLabel(rawName);

  const meta = mod?.meta ?? {};

  const type = (meta.type ?? computedType).toLowerCase();
  const category = meta.category ?? computedCategory;
  const label = meta.label ?? computedLabel;
  const description = meta.description;

  if (!Component) continue;

  if (import.meta.env.DEV) {
    if (seenTypes.has(type)) {
      // hard fail is better than silent overwrite
      throw new Error(`[nodeRegistration] Duplicate node type registered: "${type}" (from ${path})`);
    }
    seenTypes.add(type);
  }

  registerNode(type, Component);
  nodeCatalog.push({ type, category, label, component: Component, description });

  if (import.meta.env.DEV) {
    // keep logs dev-only
    // eslint-disable-next-line no-console
    console.log(`Registered node: ${label} (${type}) under ${category}`);
  }
}
