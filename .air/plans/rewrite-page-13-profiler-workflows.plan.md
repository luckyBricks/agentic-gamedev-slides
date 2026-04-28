## 1. Goal
Rewrite Page 13 into a high-signal Slidev page that explains how dotTrace, dotMemory, and dotCover complement Unity/Unreal native profiling tools through three concrete workflows.

## 2. Approach
Use a workflow-first structure instead of the current tool checklist. The slide will lead with one thesis: engine profilers tell you what happened in the frame or engine runtime, while JetBrains tools help jump from that evidence into source-level, managed-code, snapshot, coverage, and regression workflows. This avoids overstating support boundaries, especially for Unreal C++ coverage and native memory, while still making dotUltimate's performance-analysis value clear.

Research basis:
- Unity support is strongest for dotTrace: Rider 2026.1 documents Unity 2018.3+ profiling, editor/standalone workflows, and optional Windows native profiling for Unity applications. citeturn8view1
- Rider Unity Profiler assistance fetches Unity profiler snapshots into Rider and visualizes CPU data in the editor, but the documented limitations say it is CPU-only and does not cover GPU or memory data. citeturn8view2
- dotTrace has explicit Unreal Engine application profiling documentation through the standalone Unreal Engine application type; it requires symbols/PDBs, supports Timeline only for native call stack data, and can collect native allocation data. citeturn8view3
- dotMemory is documented as a .NET memory profiler integrated into Rider; it answers allocation, leak, retained-object, and GC questions for .NET processes, so the slide should position it as managed-memory/source-level analysis rather than a replacement for Unity Memory Profiler or Unreal Memory Insights. citeturn8view4turn9search3
- dotCover support must be phrased carefully: Rider 2026.1 still documents Unity test coverage, but the dotCover 2025.2 changelog says Mono and Unity runtime support were removed until Unity switches to CoreCLR; the slide should present dotCover as a .NET/Unity-test regression gate where supported, not as Unreal C++ coverage. citeturn7view0turn7view1
- Unreal native tooling remains first-class for engine telemetry: Unreal Insights documents CPU/GPU timing tracks, Memory Insights, trace sessions, and allocation/leak queries, so the JetBrains story should be “pair with Insights,” not “replace Insights.” citeturn4search1turn4search0
- Unity native tooling remains first-class for frame/module diagnosis: Unity Profiler modules cover CPU, GPU, rendering, memory, audio and related runtime vitals, while Unity Memory Profiler captures and compares memory snapshots. citeturn3search3turn3search9

## 3. File Changes
Modify `pages/13-workflow-5-perf-triage.md`:
Replace the current left-column checklist and generic `PerfDashboard` usage with a new full-slide structure: title, support-boundary microcopy, three workflow cards, and a bottom “native profiler + JetBrains profiler” takeaway. Keep frontmatter `layout: rider`, `chapter: cyan`, `page: 13`, and mandala use so the page remains consistent with nearby pages.

Create `components/ProfilerWorkflowMatrix.vue`:
New reusable visual component for Page 13. It will render three rows/cards: Unity frame hitch, Unity/managed memory regression, and Unreal native performance triage. Each row will show native evidence, JetBrains drill-down, and regression guard, with product icons and explicit support labels such as `Direct`, `Pair`, and `Caveat`.

Modify `docs/13-workflow-5-performance-memory-regression.md`:
Update the page objective, information-architecture notes, direct copy guidance, speaker notes, and fact anchors so the documentation matches the rewritten page and the verified support boundaries.

Optional modify `components/PerfDashboard.vue` only if the existing component is no longer referenced after the rewrite and we decide to keep the component list clean. Prefer leaving it untouched unless it becomes misleading or unused cleanup is explicitly wanted, because it may still be useful for drafts.

## 4. Implementation Steps
Task 1: Replace the slide narrative in `pages/13-workflow-5-perf-triage.md`.
1. Keep the current frontmatter values unchanged.
2. Replace the generic tool checklist with a sharper title, for example `Performance Triage Is a Loop, Not a Tool Window`.
3. Add a short subtitle: `Unity Profiler / Unreal Insights find the runtime symptom; dotTrace / dotMemory / dotCover turn it into source-level diagnosis and regression control.`
4. Replace `PerfDashboard` with `ProfilerWorkflowMatrix`.
5. Add a bottom note that states the boundary clearly: `Engine-native profilers stay the source of truth for GPU, rendering, assets, and engine-level telemetry; JetBrains tools make the evidence actionable inside code, tests, and CI.`

Task 2: Build the new visual component in `components/ProfilerWorkflowMatrix.vue`.
1. Define a typed `workflows` array with three workflows.
2. Workflow 1: `Unity frame hitch` with stages `Unity Profiler frame spike`, `Rider CPU hints + dotTrace Timeline/Call Tree`, `compare snapshot / rerun scenario`.
3. Workflow 2: `Memory regression` with stages `Unity Memory Profiler or Memory Insights snapshot`, `dotMemory for managed allocations, retained objects, GC pressure`, `coverage or smoke test guard where supported`.
4. Workflow 3: `Unreal native perf` with stages `Unreal Insights trace`, `dotTrace Unreal application + PDB symbols + native allocations`, `Rider UE tests / TeamCity perf gate`.
5. Use existing deck conventions: dark glass panels, cyan chapter accent, Rider/dotTrace/dotMemory/dotCover/Unity/Unreal icons from `docs/brand-assets`, and no new dependency.
6. Include short support chips per card: `Unity: direct`, `Unreal: dotTrace direct`, `Memory: native tool first`, `Coverage: managed/Unity tests caveat`.

Task 3: Update supporting documentation in `docs/13-workflow-5-performance-memory-regression.md`.
1. Replace the old “three-layer dashboard” guidance with the new workflow matrix guidance.
2. Add the three final use cases in Chinese so the implementation phase has ready copy.
3. Add speaker notes explaining the comparison with engine-native profilers and why the slide should not claim dotMemory/dotCover replace Unreal Insights or Unreal C++ coverage.
4. Update fact anchors with the verified support matrix and the dotCover compatibility caveat.

Task 4: Verify references and layout consistency.
1. Confirm `slides.md` still imports `pages/13-workflow-5-perf-triage.md` at Page 13.
2. Confirm the new component is auto-discovered by Slidev or imported according to existing component conventions.
3. Confirm all icon paths referenced from the component exist under `docs/brand-assets`.
4. Do not change other pages unless visual overflow requires minor neighboring-page alignment.

## 5. Acceptance Criteria
1. Page 13 no longer presents only three product bullets; it contains exactly three named workflows/use cases.
2. Each workflow states one engine-native signal source and one JetBrains follow-up action.
3. The rewritten slide explicitly says native engine profilers remain the source of truth for engine/GPU/asset/native-runtime telemetry.
4. The rewritten slide does not claim dotCover supports unmanaged C++ or Unreal C++ coverage.
5. The rewritten slide does not claim dotMemory replaces Unity Memory Profiler or Unreal Memory Insights for engine/native memory.
6. The Unity dotTrace claim is limited to Unity 2018.3+ and Rider/dotTrace profiling, matching official documentation.
7. The Unreal dotTrace claim is limited to standalone Unreal Engine application profiling with symbols/PDBs and Timeline/native allocation collection, matching official documentation.
8. The slide fits a 1280x720 Slidev canvas without text overflow at the existing `rider` layout padding.
9. The visual component uses only existing project assets and CSS/Tailwind utilities; no package dependency is added.
10. The supporting docs page contains the same three workflows and the same support-boundary caveats.

## 6. Verification Steps
1. Run `pnpm run dev` and inspect Page 13 in the browser at the Slidev preview.
2. Confirm Page 13 renders with the existing top-right Rider badge and bottom-right page number from the `rider` layout.
3. Open Page 13 at desktop size and verify all three workflow cards are readable without clipping.
4. Resize to a narrower viewport and verify the Slidev canvas scales without overlapping the title, matrix, or bottom note.
5. Run `pnpm run build` to catch Vue/Slidev component syntax errors.
6. Manually check that all icon paths used by `ProfilerWorkflowMatrix.vue` resolve to existing SVG files.
7. Review Page 13 copy against the cited source facts before finalizing: Unity direct profiling, Rider Unity Profiler CPU-only limitation, Unreal dotTrace standalone profiling, dotMemory .NET scope, and dotCover Unity/Mono caveat.

## 7. Risks & Mitigations
Risk: dotCover's Unity support is ambiguous across current official pages.
Mitigation: Do not make it a headline promise. Use wording such as `managed / Unity-test coverage where supported` and mention the compatibility caveat in speaker notes or docs.

Risk: The current deck emphasizes dotUltimate, so too many caveats could weaken the sales narrative.
Mitigation: Put caveats into compact chips and speaker notes, while keeping the visible thesis positive: JetBrains turns profiler evidence into source-level action and regression control.

Risk: A dense workflow matrix may become unreadable on a single slide.
Mitigation: Use three compact horizontal lanes with 3-stage labels, not full paragraphs. Keep detailed wording in `docs/13-workflow-5-performance-memory-regression.md` and speaker notes.

Risk: Unreal support can be accidentally overstated because Rider's Unreal support is broad but dotMemory/dotCover are not Unreal-native runtime profilers.
Mitigation: For Unreal, make dotTrace the only profiler claim; pair memory with Unreal Memory Insights and tests with Rider UE testing/CI rather than dotCover coverage.