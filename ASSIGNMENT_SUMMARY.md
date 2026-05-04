# Assignment Summary - Data Visualization Project

**Student Name**: [Your Name]
**Course**: COS30045 Data Visualization
**Institution**: Swinburne University of Technology
**Submission Date**: May 2026

---

## Project Title
**Australian Road Casualties Analysis: A Comparative Study (2011-2021)**

---

## 3.1 Website Design

### Wireframe Location
The complete wireframe and layout design can be found in:
- **File**: `DESIGN_DOCUMENTATION.md` (Lines 8-93)
- **Section**: "3.1 Website Design"

### Key Design Elements

#### Navigation Structure
```
Header → [Home] [Overview] [Demographics] [Road Users] [About]
```

- **Fixed header** with sticky navigation for easy access
- **Smooth scrolling** between sections
- **Mobile-responsive** hamburger menu for small screens

#### Layout Components

1. **Hero Section**
   - Prominent title and subtitle
   - Call-to-action button
   - Background gradient for visual appeal

2. **Key Insights Cards** (4 cards)
   - Total Change: +16.4%
   - Biggest Increase: Cyclists +51.4%
   - Highest Risk: 40-64 age group
   - Improvement: Pedestrians -15.3%

3. **Visualization Sections** (5 sections)
   - Overview with filtering controls
   - Demographics (Age + Gender)
   - Road User Analysis
   - Counterparty & Remoteness
   - About section

4. **Footer**
   - Project information
   - Data source attribution
   - Contact details

### Storyboard - User Journey

**See**: `DESIGN_DOCUMENTATION.md` Lines 95-136

**Scenario**: Sarah, a road safety researcher, explores the data

1. **Landing** → Sees key statistics immediately
2. **Overview** → Hovers over bars to compare years
3. **Deep Dive** → Filters by age group, discovers elderly at risk
4. **Cross-Comparison** → Uses gender chart to correlate findings
5. **Insights** → Identifies cyclists as priority area

---

## 3.2 Visualization Design

### Chart Types & Justification

**See**: `DESIGN_DOCUMENTATION.md` Lines 140-238

#### 1. Grouped Bar Chart - Overview
**Location**: `index.html:95-130`, `charts.js:9-122`

**Purpose**: Compare 2011 vs 2021 across all dimensions

**Why Appropriate**:
- Bars excel at comparing discrete categories
- Side-by-side grouping enables direct year comparison
- Clear visual representation of magnitude differences

**Design Principles Applied**:
- Y-axis starts at 0 (graphical integrity)
- Colorblind-safe palette (blue #4575b4, orange #fdae61)
- Responsive with horizontal scrolling on mobile
- Interactive tooltips reveal exact values

#### 2. Line Chart with Area Fill - Age Groups
**Location**: `index.html:151-168`, `charts.js:124-299`

**Purpose**: Show casualty trends across ordered age categories

**Why Appropriate**:
- Natural ordering of age groups creates meaningful progression
- Line shows trend direction clearly
- Area fill emphasizes magnitude of change
- Two overlapping lines enable year comparison

**Design Principles Applied**:
- Ordered categories (0-7, 8-16, 17-25, etc.)
- Distinct colors for each year
- Annotations highlighting peak values
- Smooth curve interpolation for better readability

#### 3. Donut Chart - Gender Distribution
**Location**: `index.html:172-188`, `charts.js:301-404`

**Purpose**: Show proportion of casualties by gender

**Why Appropriate**:
- Simple binary comparison (Male/Female)
- Part-to-whole relationship clearly visible
- Center space displays total count
- Easy to understand at a glance

**Design Principles Applied**:
- High contrast colors (blue/pink)
- Large text in center for total
- Interactive year selection
- Percentage labels on hover

#### 4. Horizontal Bar Chart - Road User Types
**Location**: `index.html:196-204`, `charts.js:406-533`

**Purpose**: Display percentage change for each road user category

**Why Appropriate**:
- Horizontal layout accommodates long category names
- Color-coding (red/green) shows increase/decrease instantly
- Zero baseline clearly marked
- Easy to rank by magnitude

**Design Principles Applied**:
- Center-aligned at 0% for clear positive/negative split
- Green = decrease (positive for safety)
- Red = increase (area of concern)
- Sorted by magnitude

#### 5. Scatter Plot - Counterparty Analysis
**Location**: `index.html:208-220`, `charts.js:535-653`

**Purpose**: Show relationship between percentage change and absolute numbers

**Why Appropriate**:
- Reveals patterns not visible in bar charts
- Identifies outliers and clusters
- Three dimensions (X, Y, bubble size)
- Interactive exploration of data points

**Design Principles Applied**:
- Bubble size = square root scale (not linear, to avoid distortion)
- 70% opacity to reveal overlapping points
- Grid lines for easier reading
- Color by increase/decrease direction

#### 6. Grouped Bar Chart - Remoteness
**Location**: `index.html:224-232`, `charts.js:655-773`

**Purpose**: Compare major cities vs. regional areas

**Why Appropriate**:
- Clear geographic comparison
- Shows both years side-by-side
- Magnitude differences easily visible
- Limited categories (4) prevent clutter

**Design Principles Applied**:
- Same color scheme as overview for consistency
- Grid lines for accurate reading
- Sorted by 2021 count (highest to lowest)

### Graphical Integrity

**All charts adhere to these principles**:

1. **No Truncated Axes** - All Y-axes start at 0
2. **Proportional Scaling** - Bubble sizes use square root scale
3. **Clear Baselines** - Zero lines prominently marked
4. **Honest Comparisons** - Same scale for 2011/2021
5. **Source Attribution** - Data source clearly cited

### Accessibility

**Color Palette** (`style.css:21-32`):
```css
--color-increase: #d73027  (Red-Orange)
--color-decrease: #1a9850  (Green)
--color-neutral: #4575b4   (Blue)
--color-secondary: #fdae61 (Light Orange)
```

**Tested Against**:
- Deuteranopia (red-green colorblindness)
- Protanopia (red-green colorblindness)
- Tritanopia (blue-yellow colorblindness)
- Grayscale mode

**Font Accessibility**:
- Minimum body text: 14px
- Minimum labels: 12px
- Minimum headings: 18px
- Line height: 1.6
- System font stack for maximum compatibility

**WCAG 2.1 AA Compliance**:
- Color contrast ratio: 4.5:1 minimum
- Keyboard navigation for all interactions
- ARIA labels on all charts
- Screen reader compatible
- No content conveyed by color alone

### Scalability - Responsive Design

**Breakpoints** (`style.css:631-696`):

```css
Mobile:     < 768px    (Single column, vertical stacking)
Tablet:     768-1024px (2-column grid)
Desktop:    1024-1440px (Full layout)
Large:      > 1440px   (Optimized spacing)
```

**Responsive Features**:
- CSS Grid auto-fit for flexible layouts
- SVG charts scale with container width
- Mobile: Touch interactions instead of hover
- Mobile: Simplified charts with fewer data points
- Mobile: Modal tooltips instead of following cursor

### Annotations & Tooltips

**Annotations** (Static - on charts):
```
Example: "Peak increase: 65-74 age group saw 53.4% rise"
```

**Implementation**: `charts.js:168` (Age chart annotation)

**Placement Rules**:
- Top-right for general insights
- Near data points for specific callouts
- Never overlapping with data elements

**Tooltips** (Dynamic - on hover):

**Example Tooltip Structure**:
```
┌──────────────────────────────┐
│ Road User: Pedal Cyclist     │
│ 2011: 5,391 casualties       │
│ 2021: 8,163 casualties       │
│ Change: +2,772 (+51.4%)      │
│ Direction: ⬆ Increase        │
└──────────────────────────────┘
```

**Implementation**: `main.js:201-249`

**Features**:
- 200ms delay before showing
- Follows cursor with 15px offset
- White text on dark background (contrast: 21:1)
- Auto-positions to stay within viewport
- Fades in/out smoothly

---

## 3.3 Interaction Design

### Interactive Features Overview

**See**: `DESIGN_DOCUMENTATION.md` Lines 373-453

1. **Hover Interactions** - Tooltips with detailed data
2. **Click Interactions** - Filtering and drill-down
3. **Dropdown Filters** - Dimension selection
4. **Sorting Controls** - Reorder by different metrics
5. **View Mode Toggle** - Switch between years
6. **Keyboard Navigation** - Full accessibility
7. **Smooth Animations** - 300-800ms transitions

### Interaction Table

| Interaction | Trigger | User Action | System Response | Implementation |
|-------------|---------|-------------|-----------------|----------------|
| **Hover on Bar** | Mouse over | Move cursor over bar | • Darken bar<br>• Show tooltip<br>• Display exact values | `charts.js:98-114` |
| **Click Legend** | Mouse click | Click year in legend | • Toggle series visibility<br>• Fade in/out (300ms)<br>• Update scale | `main.js:148-156` |
| **Dropdown Filter** | Select change | Choose dimension | • Filter all charts<br>• Animate transition (500ms)<br>• Update statistics | `main.js:158-164` |
| **Sort Button** | Mouse click | Click sort dropdown | • Reorder bars<br>• Animate movement (400ms)<br>• Update order | `main.js:167-173` |
| **Touch on Mobile** | Tap | Tap chart element | • Show modal tooltip<br>• Enlarge element<br>• Dismiss on tap outside | `style.css:665` |
| **Hover on Line** | Mouse over | Move along line chart | • Show vertical crosshair<br>• Highlight nearest point<br>• Display tooltip | `charts.js:250-264` |
| **Double-click Reset** | Double click | Double-click chart | • Reset zoom/filters<br>• Return to default view<br>• Smooth transition (600ms) | Future enhancement |
| **Keyboard Nav** | Tab/Arrow | Press Tab | • Move focus between elements<br>• Show blue outline (3px)<br>• Enter to activate | `style.css:698-710` |
| **Radio Toggle** | Mouse click | Select gender year | • Update donut chart<br>• Smooth transition<br>• Update center text | `main.js:176-182`, `charts.js:301-404` |
| **Scroll** | Mouse wheel | Scroll page | • Update active nav item<br>• Smooth scroll to section<br>• Highlight current section | `main.js:26-60` |

### Animation Timeline

**Data Update** (`charts.js` - all update functions):
```
0ms:    User triggers filter
100ms:  Old data fades (opacity 1 → 0.3)
200ms:  Elements morph to new positions
500ms:  New data fades in (opacity 0.3 → 1)
600ms:  Animation complete
```

**Implementation**: Consistent across all charts using D3 transitions

**Hover Animation** (`main.js:201-249`):
```
0ms:    Mouse enters
50ms:   Tooltip fade begins
200ms:  Fully visible
```

### Responsive Interaction Adjustments

**Desktop** (`style.css:1-630`):
- Hover states active
- Tooltips follow cursor
- Click for drill-down

**Tablet** (`style.css:631-649`):
- Tap-and-hold (500ms) for hover
- Tooltips positioned above/below
- Pinch-zoom enabled

**Mobile** (`style.css:650-696`):
- All touch-based interactions
- Modal tooltips (fullscreen on small devices)
- Swipe gestures for navigation
- Simplified chart layouts

---

## Technical Implementation Details

### File References

#### HTML Structure
**File**: `index.html`
- Lines 1-22: Head section with meta tags
- Lines 24-44: Header navigation
- Lines 47-54: Hero section
- Lines 57-78: Key insights cards
- Lines 81-130: Overview chart with controls
- Lines 133-188: Demographics section
- Lines 191-232: Road users section
- Lines 235-267: About section
- Lines 270-285: Footer

#### CSS Styling
**File**: `assest/css/style.css`
- Lines 1-54: Reset & variables
- Lines 56-83: Typography
- Lines 85-103: Layout & containers
- Lines 105-158: Header & navigation
- Lines 160-201: Hero section
- Lines 203-256: Insight cards
- Lines 258-305: Chart controls
- Lines 307-372: Chart containers
- Lines 374-401: Tooltips
- Lines 403-446: About section
- Lines 448-488: Footer
- Lines 490-513: Animations
- Lines 515-545: D3 chart styles
- Lines 547-696: Responsive design
- Lines 698-749: Accessibility features

#### JavaScript Functionality
**File**: `assest/js/main.js`
- Lines 1-10: State management
- Lines 12-18: Initialization
- Lines 20-60: Navigation
- Lines 62-84: Mobile menu
- Lines 86-103: Data loading
- Lines 105-182: Controls initialization
- Lines 184-199: Data filtering
- Lines 201-249: Tooltip utilities
- Lines 251-279: Formatting functions
- Lines 281-304: Responsive handlers
- Lines 306-328: Export utilities

**File**: `assest/js/charts.js`
- Lines 9-122: Overview chart (grouped bars)
- Lines 124-299: Age group chart (line with area)
- Lines 301-404: Gender chart (donut)
- Lines 406-533: Road user chart (horizontal bars)
- Lines 535-653: Counterparty chart (scatter plot)
- Lines 655-773: Remoteness chart (grouped bars)

---

## Data Source & Attribution

**Dataset**: Australian Road Casualties 2011-2021
**Dimensions**: 5 (Gender, Age Group, Road User Type, Counterparty, Remoteness)
**Categories**: 35 total across all dimensions
**Records**: 36 data points (including Missing category)

---

## Key Features Checklist

- [x] Wireframe design with clear layout structure
- [x] User journey storyboard
- [x] 6 different chart types with justifications
- [x] Graphical integrity (no misleading charts)
- [x] Accessibility (WCAG 2.1 AA compliant)
- [x] Colorblind-safe palettes
- [x] Responsive design (mobile, tablet, desktop)
- [x] Interactive tooltips
- [x] Filtering and sorting capabilities
- [x] Smooth animations
- [x] Keyboard navigation
- [x] ARIA labels for screen readers
- [x] Comprehensive documentation

---

## How to View

1. **Start the server**:
   ```bash
   ./start-server.sh
   ```
   OR
   ```bash
   python3 -m http.server 8000
   ```

2. **Open browser**: http://localhost:8000

3. **Explore**: Use filters, hover over elements, and interact with charts

---

## Documentation Files

1. **DESIGN_DOCUMENTATION.md** - Complete design rationale (24KB)
2. **README.md** - Technical documentation and user guide (8KB)
3. **ASSIGNMENT_SUMMARY.md** - This file, submission summary
4. **index.html** - Main webpage (15KB)
5. **assest/css/style.css** - All styling (24KB)
6. **assest/js/main.js** - Core functionality (9KB)
7. **assest/js/charts.js** - D3.js visualizations (32KB)

---

## Conclusion

This data visualization project successfully demonstrates:

1. **Effective Design**: Clear wireframes and user-centered storyboarding
2. **Appropriate Visualizations**: Six different chart types, each chosen for specific data characteristics
3. **Design Principles**: Adherence to graphical integrity, accessibility, and scalability
4. **Rich Interactions**: Comprehensive interaction design with 10+ interaction types
5. **Technical Excellence**: Clean code, responsive design, and smooth animations

The project reveals critical insights about Australian road safety trends, particularly the concerning rise in cyclist casualties and the increasing vulnerability of older age groups, while also highlighting positive trends in pedestrian safety.

---

**Submitted by**: [Your Name]
**Date**: May 4, 2026
