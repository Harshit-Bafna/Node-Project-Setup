const config = {
    '*.{js,jsx,ts,tsx}': ['npm run lint:eslint', 'npm run format:check'],
    '*.{json,html,yml,yaml,md}': ['npm run format:check']
}

export default config
