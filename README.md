# It's Time

An Expo React Native application.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)
- Expo Go app on your mobile device (iOS or Android)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the Expo development server:
   ```bash
   npm start
   # or
   yarn start
   # or
   npx expo start
   ```

3. Run on a specific platform:
   ```bash
   npm run ios      # iOS simulator
   npm run android  # Android emulator
   npm run web      # Web browser
   ```

### Development

- Scan the QR code with Expo Go app (iOS) or Camera app (Android) to run on your device
- Press `a` to open Android emulator
- Press `i` to open iOS simulator
- Press `w` to open in web browser
- Press `r` to reload the app
- Press `m` to toggle the menu

### Project Structure

```
├── App.js          # Main app component
├── app.json        # Expo configuration
├── package.json    # Dependencies and scripts
├── babel.config.js # Babel configuration
└── assets/         # Images, fonts, and other assets
```

### Next Steps

1. Create an `assets` folder with:
   - `icon.png` (1024x1024px)
   - `splash.png` (1242x2436px recommended)
   - `adaptive-icon.png` (1024x1024px for Android)
   - `favicon.png` (48x48px for web)

2. Start building your app in `App.js`

3. Add more screens and navigation as needed

### Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo SDK Reference](https://docs.expo.dev/versions/latest/)

