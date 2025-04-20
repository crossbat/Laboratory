const modules = import.meta.glob('../Lab/*.jsx', { eager: true });

const components = {};

for (const path in modules) {
  const name = path.split('/').pop().replace('.jsx', '');
  components[name.toLowerCase()] = modules[path].default;
}

export default components
