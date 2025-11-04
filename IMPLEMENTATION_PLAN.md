# It's Time - Implementation Plan

## 🎨 Design Overview

### Login Screen
- **Background**: Dark gray/black
- **Outer Frame**: Light gray hand-drawn rounded rectangle
- **Inner Frame**: White hand-drawn rounded rectangle
- **Question**: "Is it TIME?" (white, hand-drawn font)
- **Email Input**: Blue border, white placeholder text
- **Password Input**: Blue border, white placeholder text
- **Login Button**: Green text, clickable

### Logo
- Cartoon monkey with sunglasses on head
- Ringing alarm clock
- Bright orange background
- Rounded square frame
- Vibrant, playful style

## 📱 App Structure

### Navigation Flow
```
App Entry
  └── Auth Navigator
      ├── Login Screen (initial)
      └── (Future: Sign Up, Forgot Password)
  └── Main Navigator (after login)
      ├── Home Screen
      └── (Future screens...)
```

### Folder Structure
```
src/
  ├── components/
  │   ├── HandDrawnFrame.js      # Reusable hand-drawn frame component
  │   ├── HandDrawnInput.js     # Input with hand-drawn blue border
  │   ├── HandDrawnButton.js    # Button with hand-drawn green text
  │   └── Logo.js               # Logo component
  ├── screens/
  │   └── LoginScreen.js        # Main login screen
  ├── navigation/
  │   └── AppNavigator.js       # Navigation setup
  ├── styles/
  │   └── theme.js              # Colors, fonts, styling constants
  └── assets/
      ├── images/
      │   └── logo.png          # Monkey + clock logo
      └── fonts/
          └── (hand-drawn font if needed)
```

## 🛠️ Required Libraries

### Navigation
- `@react-navigation/native` - Core navigation
- `@react-navigation/stack` - Stack navigator
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling

### UI/Styling
- `react-native-svg` - For custom SVG graphics (if needed for hand-drawn look)
- Custom hand-drawn style components (we'll create these)

### State Management
- `@react-native-async-storage/async-storage` - Store auth tokens
- React Context API (for auth state)

### Form Handling (Optional)
- `react-hook-form` - Form validation (optional)
- Or simple useState for email/password

## 🎨 Design Implementation Strategy

### Hand-Drawn Aesthetic
1. **Custom Components**: Create reusable components with hand-drawn borders
   - Use `borderRadius` with slight variations
   - Add subtle border irregularities via custom styling
   - Use sketch-style fonts or create custom styled text

2. **Color Palette**
   - Background: `#1a1a1a` or `#000000` (dark)
   - Outer Frame: `#d3d3d3` (light gray)
   - Inner Frame: `#ffffff` (white)
   - Input Borders: `#4a9eff` (light blue)
   - Login Text: `#4caf50` (green)
   - Page Title: `#ff4444` (red)

3. **Typography**
   - Use system fonts with custom styling
   - Or integrate a hand-drawn font (like "Indie Flower" or custom)
   - Add slight letter spacing variations

### Logo Integration
- Use as app icon (already configured in app.json)
- Display on splash screen
- Show on login screen (optional)

## 📋 Implementation Steps

### Phase 1: Setup (Foundation)
1. ✅ Install navigation dependencies
2. ✅ Create folder structure
3. ✅ Set up navigation structure
4. ✅ Add logo asset to assets folder
5. ✅ Create theme/constants file

### Phase 2: Components
1. Create HandDrawnFrame component
2. Create HandDrawnInput component
3. Create HandDrawnButton component
4. Create Logo component

### Phase 3: Login Screen
1. Build LoginScreen layout
2. Add email/password inputs
3. Add login button functionality
4. Style with hand-drawn aesthetic
5. Add form validation (basic)

### Phase 4: Integration
1. Connect navigation
2. Add auth state management
3. Test login flow
4. Polish styling

### Phase 5: Future Enhancements
- Sign up screen
- Forgot password
- Home screen (after login)
- API integration for authentication

## 🎯 Key Components Breakdown

### HandDrawnFrame
```javascript
// Props: children, outerStyle, innerStyle
// Creates the nested frame structure
```

### HandDrawnInput
```javascript
// Props: placeholder, value, onChangeText, secureTextEntry
// Custom input with blue hand-drawn border
```

### HandDrawnButton
```javascript
// Props: title, onPress, color
// Green text button with hand-drawn styling
```

### LoginScreen
```javascript
// Main login screen
// Contains: Logo, "Is it TIME?" text, email input, password input, login button
// Dark background with nested frames
```

## 🔐 Authentication Flow (Future)

1. User enters email/password
2. Validate inputs
3. Call authentication API (to be implemented)
4. Store auth token
5. Navigate to main app screens

## 📝 Notes

- Start with mock/login flow (no backend initially)
- Hand-drawn aesthetic can be achieved with:
  - Custom border styling
  - Sketch-style fonts
  - Slight irregularities in spacing/borders
- Logo should be optimized for different screen sizes
- Consider accessibility (contrast, text sizes)

