<script setup lang="ts">
type IconName = 'controller' | 'engine' | 'brush' | 'pipeline' | 'governance'

const columns = [
  {
    step: '01',
    title: 'Core users',
    subtitle: 'Adopt first',
    icon: 'controller',
    value: 'Shorter build, debug, and validation loops.',
    roles: [
      { title: 'Gameplay', sub: 'logic and tests', icon: 'controller' },
      { title: 'Engine', sub: 'systems code', icon: 'engine' },
      { title: 'Tools', sub: 'studio glue', icon: 'pipeline' },
      { title: 'Tech art', sub: 'shaders and assets', icon: 'brush' },
    ],
  },
  {
    step: '02',
    title: 'Process owners',
    subtitle: 'Operationalize value',
    icon: 'pipeline',
    value: 'Move quality and feedback closer to every change.',
    roles: [
      { title: 'Quality', sub: 'tests and gates', icon: 'governance' },
      { title: 'Build', sub: 'mainline safety', icon: 'pipeline' },
      { title: 'Leads', sub: 'review discipline', icon: 'engine' },
      { title: 'Agent platform', sub: 'studio skills', icon: 'brush' },
    ],
  },
  {
    step: '03',
    title: 'Decision makers',
    subtitle: 'Standardize and govern',
    icon: 'governance',
    value: 'Buy convergence: standards, governance, and measurable control.',
    roles: [
      { title: 'Engineering management', sub: 'toolchain policy', icon: 'pipeline' },
      { title: 'Technology executive', sub: 'budget and risk', icon: 'governance' },
    ],
  },
] as const

const iconPaths: Record<IconName, string[]> = {
  controller: [
    'M7 9h10a4 4 0 0 1 3.8 2.7l1 3.3a3 3 0 0 1-5 3l-2.1-2h-5.4L7.2 18a3 3 0 0 1-5-3l1-3.3A4 4 0 0 1 7 9Z',
    'M7 13h4M9 11v4M16.5 12.2h.01M18.5 14h.01',
  ],
  engine: [
    'M8 3h8l1 3 3 1v10l-3 1-1 3H8l-1-3-3-1V7l3-1 1-3Z',
    'M9 9h6v6H9zM12 6v3M12 15v3M6 12h3M15 12h3',
  ],
  brush: [
    'M15.5 4.5 19 8l-8.2 8.2a3 3 0 0 1-4.2 0l-.8-.8a3 3 0 0 1 0-4.2l8.2-8.2Z',
    'M4 20c2.7 0 4.5-.9 5.4-2.7M13 7l4 4',
  ],
  pipeline: [
    'M4 5h6v6H4zM14 13h6v6h-6z',
    'M10 8h3a3 3 0 0 1 3 3v2M14 16h-3a3 3 0 0 1-3-3v-2',
  ],
  governance: [
    'M12 3 20 7v5c0 4.2-2.8 7.5-8 9-5.2-1.5-8-4.8-8-9V7l8-4Z',
    'M8.5 12.2 11 14.7l4.8-5.2',
  ],
}
</script>

<template>
  <div class="role-map">
    <div class="role-map__rail" />

    <section v-for="column in columns" :key="column.title" class="role-column">
      <header class="role-column__header">
        <div class="role-column__step">{{ column.step }}</div>
        <div class="role-column__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path v-for="path in iconPaths[column.icon]" :key="path" :d="path" />
          </svg>
        </div>
        <div>
          <div class="role-column__subtitle">{{ column.subtitle }}</div>
          <h3>{{ column.title }}</h3>
        </div>
      </header>

      <p class="role-column__value">{{ column.value }}</p>

      <div class="role-list">
        <div v-for="role in column.roles" :key="role.title" class="role-item">
          <div class="role-item__icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path v-for="path in iconPaths[role.icon]" :key="path" :d="path" />
            </svg>
          </div>
          <div>
            <strong>{{ role.title }}</strong>
            <span>{{ role.sub }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="flow flow--top">
      <span>value evidence rises</span>
      <i />
    </div>
    <div class="flow flow--bottom">
      <i />
      <span>standards flow back</span>
    </div>
  </div>
</template>

<style scoped>
.role-map {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  width: 100%;
  min-height: 348px;
  isolation: isolate;
}

.role-map::before {
  content: '';
  position: absolute;
  inset: 26px 42px 12px;
  z-index: -2;
  border-radius: 999px;
  background:
    radial-gradient(circle at 18% 50%, rgba(231, 60, 255, 0.28), transparent 28%),
    radial-gradient(circle at 50% 50%, rgba(154, 75, 255, 0.22), transparent 30%),
    radial-gradient(circle at 82% 50%, rgba(108, 59, 255, 0.2), transparent 28%);
  filter: blur(22px);
}

.role-map__rail {
  position: absolute;
  left: 11%;
  right: 11%;
  top: 64px;
  z-index: -1;
  height: 2px;
  background: linear-gradient(90deg, var(--mandala-c), var(--mandala-b), var(--mandala-a));
  opacity: 0.65;
}

.role-map__rail::before,
.role-map__rail::after {
  content: '';
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-top: 2px solid var(--mandala-a);
  border-right: 2px solid var(--mandala-a);
  transform: rotate(45deg);
}

.role-map__rail::before {
  left: 31.5%;
}

.role-map__rail::after {
  right: 31.5%;
}

.role-column {
  position: relative;
  overflow: hidden;
  min-height: 348px;
  padding: 20px 18px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.026)),
    rgba(5, 5, 16, 0.68);
  backdrop-filter: blur(12px);
}

.role-column::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    linear-gradient(135deg, rgba(231, 60, 255, 0.18), transparent 44%),
    linear-gradient(315deg, rgba(108, 59, 255, 0.14), transparent 42%);
  opacity: 0.76;
  pointer-events: none;
}

.role-column__header {
  position: relative;
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  z-index: 1;
}

.role-column__step {
  color: rgba(255, 255, 255, 0.28);
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.role-column__icon,
.role-item__icon {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: white;
  background: linear-gradient(135deg, var(--mandala-c), var(--mandala-b));
  box-shadow: 0 0 22px rgba(231, 60, 255, 0.24);
}

.role-column__icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
}

.role-column__subtitle {
  color: var(--mandala-c);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.role-column h3 {
  margin: 1px 0 0;
  color: white;
  font-size: 20px;
  font-weight: 850;
  line-height: 1.05;
}

.role-column__value {
  position: relative;
  z-index: 1;
  min-height: 58px;
  margin: 18px 0 16px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  font-weight: 650;
  line-height: 1.4;
}

.role-list {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 8px;
}

.role-item {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 46px;
  padding: 8px 9px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.045);
}

.role-item__icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  opacity: 0.94;
}

svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.role-item__icon svg {
  width: 16px;
  height: 16px;
}

.role-item strong {
  display: block;
  color: white;
  font-size: 12.5px;
  font-weight: 800;
  line-height: 1.05;
}

.role-item span {
  display: block;
  margin-top: 3px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.05;
}

.flow {
  position: absolute;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 9px;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.42);
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.flow i {
  display: block;
  width: 138px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--mandala-c), transparent);
}

.flow--top {
  top: -22px;
}

.flow--bottom {
  bottom: -24px;
}
</style>
