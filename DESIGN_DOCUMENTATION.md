# Data Visualization Project - Design Documentation
## Australian Road Casualties (2011-2021)

---

## 3.1 Website Design

### Navigation Structure
```
┌─────────────────────────────────────────────────────────────┐
│  HEADER: Australian Road Casualties 2011-2021               │
│  [Home] [Overview] [Demographics] [Road Users] [About]      │
└─────────────────────────────────────────────────────────────┘
```

### Wireframe Layout

```
┌────────────────────────────────────────────────────────────────┐
│                         HEADER                                  │
│  Logo/Title                              Navigation Menu        │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HERO SECTION                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Main Heading: "Understanding Road Safety in Australia"  │  │
│  │  Subheading: Analysis of casualties 2011-2021           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  KEY INSIGHTS SECTION                                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ Total Change│  │  Top Trend  │  │   Risk      │            │
│  │   +16.4%    │  │  Cyclists   │  │   Groups    │            │
│  │   KPI Card  │  │  +51.4%     │  │   40-64     │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VISUALIZATION SECTION 1: Overview                              │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Interactive Bar Chart: Overall Change by Dimension      │  │
│  │  (Grouped Bar Chart - 2011 vs 2021)                     │  │
│  │                                                           │  │
│  │  Controls: [Filter by Dimension ▼] [Sort ▼]             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VISUALIZATION SECTION 2: Demographics                          │
│  ┌────────────────────────┐  ┌──────────────────────────────┐  │
│  │  Age Group Analysis    │  │   Gender Distribution        │  │
│  │  (Line Chart with      │  │   (Donut/Pie Chart)         │  │
│  │   Area Fill)           │  │   Interactive Segments       │  │
│  │                        │  │                              │  │
│  └────────────────────────┘  └──────────────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VISUALIZATION SECTION 3: Road User Analysis                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Road User Type Changes (Horizontal Bar Chart)           │  │
│  │  Color-coded by increase/decrease                        │  │
│  │                                                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VISUALIZATION SECTION 4: Counterparty & Location              │
│  ┌────────────────────────┐  ┌──────────────────────────────┐  │
│  │  Counterparty Types    │  │   Remoteness Analysis        │  │
│  │  (Scatter Plot)        │  │   (Grouped Bar Chart)       │  │
│  │  Size = absolute change│  │   Major Cities vs Regional   │  │
│  └────────────────────────┘  └──────────────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                    FOOTER                                       │
│  Data Source | About Project | Contact | © 2026                │
└────────────────────────────────────────────────────────────────┘
```

### Storyboard - User Journey

**Scenario**: Sarah, a road safety researcher, wants to understand which demographic groups have seen the highest increase in road casualties.

#### Step 1: Landing Page
```
User arrives → Sees hero section with key statistics
              → Immediately understands: casualties increased 16.4%
```

#### Step 2: Overview Exploration
```
User scrolls → Views grouped bar chart showing all dimensions
             → Hovers over bars → Sees exact numbers (2011 vs 2021)
             → Notices cyclists have dramatic increase
```

#### Step 3: Demographic Deep Dive
```
User clicks → "Demographics" section or scrolls down
            → Sees age group line chart
            → Hovers over line → Tooltip shows: "65-74: +53.4%"
            → Identifies elderly as high-risk group
```

#### Step 4: Cross-Comparison
```
User uses filter → Selects "Age Group" + "Road User Type"
                 → Donut chart updates showing distribution
                 → Discovers correlation: older drivers increasing
```

#### Step 5: Insights & Actions
```
User reads → Annotations on charts explaining trends
           → Notes that pedal cyclists (51.4% increase) need attention
           → Downloads or shares specific visualization
```

---

## 3.2 Visualization Design

### Chart Types & Justification

#### 1. Grouped Bar Chart - Overall Comparison
**Purpose**: Compare 2011 vs 2021 counts across all dimensions
**Why Appropriate**:
- Bar charts excel at comparing discrete categories
- Grouping allows direct side-by-side comparison of two years
- Easy to see absolute differences in magnitude

**Design Principles**:
- **Graphical Integrity**: Y-axis starts at 0 to avoid misleading proportions
- **Accessibility**: Uses colorblind-safe palette (blue/orange)
- **Scalability**: Responsive design with horizontal scrolling on mobile

#### 2. Line Chart with Area Fill - Age Group Trends
**Purpose**: Show progression of casualties across age groups
**Why Appropriate**:
- Line charts show trends and patterns across ordered categories
- Area fill emphasizes magnitude of change
- Natural ordering of age groups creates meaningful narrative

**Design Principles**:
- **Color**: Diverging color scale (green for decrease, red for increase)
- **Labels**: Clear axis labels, age ranges prominently displayed
- **Annotations**: Peak values annotated (e.g., "40-64: Highest increase")

#### 3. Horizontal Bar Chart - Road User Type Changes
**Purpose**: Display percentage change for each road user category
**Why Appropriate**:
- Horizontal layout accommodates long category names
- Color-coding immediately shows increase/decrease direction
- Easy ranking of categories by magnitude

**Design Principles**:
- **Color Coding**:
  - Green: Decrease (positive change for safety)
  - Red: Increase (negative change, needs attention)
- **Zero Baseline**: Center-aligned at 0% for clear positive/negative split
- **Font Size**: Minimum 14px for accessibility

#### 4. Scatter Plot - Counterparty Analysis
**Purpose**: Show relationship between percentage change and absolute numbers
**Why Appropriate**:
- Reveals outliers and patterns not visible in bar charts
- Size encoding shows third dimension (absolute change)
- Interactive tooltips provide detailed information

**Design Principles**:
- **Size**: Bubble size proportional to absolute change
- **Position**: X-axis = percentage change, Y-axis = 2021 count
- **Color**: Categorical color for counterparty type
- **Transparency**: 70% opacity to reveal overlapping points

#### 5. Donut Chart - Gender Distribution
**Purpose**: Show proportion of total casualties by gender
**Why Appropriate**:
- Clear part-to-whole relationship
- Simple binary comparison (Male/Female)
- Center space used for total count display

**Design Principles**:
- **Contrast**: High contrast between segments (blue/pink)
- **Labels**: Percentage and absolute numbers on hover
- **Accessibility**: Pattern fills as alternative to color

### Graphical Elements Representation

| Element | Data Mapping | Purpose |
|---------|--------------|---------|
| **Color - Diverging** | Increase (Red) vs Decrease (Green) | Immediate identification of trend direction |
| **Color - Categorical** | Different dimensions (Gender, Age, etc.) | Distinguish between categories |
| **Size (Bubbles)** | Absolute change value | Emphasize magnitude of change |
| **Position (X-axis)** | Percentage change | Show relative impact |
| **Position (Y-axis)** | Count values (2011/2021) | Show absolute numbers |
| **Length (Bars)** | Count values | Compare magnitudes |
| **Opacity** | Data density | Reduce visual clutter in scatter plots |
| **Shape** | Dimension type | Secondary encoding for accessibility |

### Color Palette - Accessibility

**Primary Palette (Colorblind-Safe)**:
- Increase/Negative: `#d73027` (Red-Orange)
- Decrease/Positive: `#1a9850` (Green)
- Neutral: `#4575b4` (Blue)
- Secondary: `#fdae61` (Light Orange)

**Tested Against**:
- Deuteranopia (red-green colorblindness)
- Protanopia (red-green colorblindness)
- Tritanopia (blue-yellow colorblindness)
- Grayscale mode

**Font Accessibility**:
- Minimum size: 14px for body text
- Minimum size: 12px for chart labels
- Minimum size: 18px for headings
- Font family: 'Segoe UI', system fonts (web-safe)
- Line height: 1.6 for readability

### Annotations & Tooltips Strategy

#### Annotations (Static)
```
Example on Age Group Chart:
┌────────────────────────────────┐
│  "Peak increase: 65-74 age     │
│   group saw 53.4% rise"        │
│   [Arrow pointing to peak]     │
└────────────────────────────────┘
```

**Placement Rules**:
- Top-right corner for general insights
- Near data points for specific callouts
- Non-overlapping with data elements

#### Tooltips (Dynamic)
```
On Hover:
┌──────────────────────────────┐
│ Road User: Pedal Cyclist     │
│ 2011: 5,391 casualties       │
│ 2021: 8,163 casualties       │
│ Change: +2,772 (+51.4%)      │
│ Direction: ⬆ Increase        │
└──────────────────────────────┘
```

**Tooltip Features**:
- Appears on hover with 200ms delay
- Follows cursor with offset
- Includes all relevant metrics
- Color-coded border matching data point
- White background with subtle shadow
- Large font (14px) for accessibility

### Layout Decisions

**Grid System**: 12-column responsive grid
- Desktop (>1024px): Full width visualizations
- Tablet (768-1024px): 2-column layout for paired charts
- Mobile (<768px): Single column, vertical stacking

**Spacing**:
- Section padding: 60px vertical
- Chart margin: 40px between charts
- White space: 20px minimum around interactive elements

**Responsive Breakpoints**:
```css
Mobile:     < 768px
Tablet:     768px - 1024px
Desktop:    1024px - 1440px
Large:      > 1440px
```

---

## 3.3 Interaction Design

### Interactive Features Overview

1. **Hover Interactions**: Tooltips revealing detailed data
2. **Click Interactions**: Filter and drill-down capabilities
3. **Zoom/Pan**: Scatter plot exploration
4. **Transitions**: Smooth animations when data updates
5. **Filtering**: Dynamic dimension selection
6. **Sorting**: Reorder charts by different metrics

### Interaction Table

| Interaction Method | Trigger | User Behavior | System Response | Purpose |
|-------------------|---------|---------------|-----------------|---------|
| **Hover on Bar** | Mouse over | User moves cursor over bar in chart | - Highlight bar with darker shade<br>- Display tooltip with exact values<br>- Show: Dimension, 2011 count, 2021 count, absolute change, percentage | Reveal precise data values without cluttering chart |
| **Click on Legend** | Mouse click | User clicks legend item (e.g., "2011") | - Toggle visibility of data series<br>- Fade out/in with 300ms transition<br>- Update scale if needed | Allow focus on specific year or category |
| **Drag on Scatter Plot** | Click + drag | User clicks and drags on scatter plot background | - Pan the view<br>- Update axis labels<br>- Smooth 60fps movement | Explore dense data areas in detail |
| **Scroll/Pinch Zoom** | Mouse wheel or touch | User scrolls mouse wheel or pinches | - Zoom in/out centered on cursor<br>- Scale: 0.5x to 5x<br>- Update axis tick density | Examine specific data clusters |
| **Click on Data Point** | Mouse click | User clicks bubble in scatter plot | - Highlight related data across all charts<br>- Dim unrelated data (30% opacity)<br>- Show detail panel on right | Cross-filter and explore relationships |
| **Dropdown Filter** | Select change | User selects dimension from dropdown | - Filter all visualizations<br>- Animate transition (500ms)<br>- Update summary statistics | Focus analysis on specific dimension |
| **Sort Button** | Mouse click | User clicks sort icon in chart header | - Reorder bars (ascending/descending)<br>- Animate bar movement (400ms)<br>- Toggle icon direction | Identify top/bottom categories quickly |
| **Touch on Mobile** | Tap | User taps chart element on mobile | - Show modal tooltip (dismissible)<br>- Enlarge tapped element<br>- Prevent accidental interactions | Provide detailed info on touch devices |
| **Hover on Line** | Mouse over | User moves cursor along line chart | - Display vertical crosshair<br>- Show tooltip for nearest data point<br>- Highlight corresponding point | Track values across continuous scale |
| **Double-click Reset** | Double click | User double-clicks chart area | - Reset zoom/pan to default<br>- Clear all filters<br>- Smooth transition (600ms) | Quick return to overview |
| **Keyboard Navigation** | Tab/Arrow keys | User presses Tab or arrow keys | - Move focus between chart elements<br>- Show focus outline (3px blue)<br>- Enter key triggers click action | Accessibility for keyboard-only users |
| **Checkbox Toggle** | Mouse click | User toggles comparison mode checkbox | - Switch between absolute/percentage view<br>- Smooth scale transition<br>- Update axis labels and tooltips | Compare different metrics |

### Animation Timeline

**Data Update Animation**:
```
0ms:    User triggers filter
100ms:  Old data fades out (opacity 1 → 0.3)
200ms:  Chart elements morph to new positions
500ms:  New data fades in (opacity 0.3 → 1)
600ms:  Animation complete
```

**Hover Animation**:
```
0ms:    Mouse enters element
50ms:   Tooltip fade in begins
200ms:  Tooltip fully visible
        Element highlight applied
```

### Responsive Interaction Adjustments

**Desktop**:
- Hover states active
- Tooltips follow cursor
- Click for detailed drill-down

**Tablet**:
- Hover converted to tap-and-hold (500ms)
- Tooltips positioned above/below element
- Pinch-zoom enabled

**Mobile**:
- All interactions touch-based
- Modal tooltips (fullscreen on small devices)
- Simplified charts (fewer data points)
- Swipe gestures for navigation between sections

---

## Design Sketches

### Sketch 1: Desktop Layout
```
╔══════════════════════════════════════════════════════════════╗
║  AUSTRALIAN ROAD CASUALTIES 2011-2021              [Nav Menu]║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  Understanding Road Safety Trends in Australia                ║
║  A decade of data reveals critical insights                   ║
║                                                               ║
╠═══════════════╦═══════════════╦═══════════════╦══════════════╣
║   Total       ║   Biggest     ║   Highest     ║   Areas of   ║
║  +16.4%       ║   Increase    ║   Risk Group  ║   Improvement║
║  5,471 more   ║   Cyclists    ║   40-64 yrs   ║   Pedestrians║
╠═══════════════╩═══════════════╩═══════════════╩══════════════╣
║                                                               ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ Dimension: [All ▼]  Sort: [Percentage ▼]  View: [Both] │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │                                                         │ ║
║  │   ████ 2011                                            │ ║
║  │   ████ 2021                                            │ ║
║  │                                                         │ ║
║  │   [=======]                 Male                       │ ║
║  │   [=========]                                          │ ║
║  │                                                         │ ║
║  │   [====]                    Female                     │ ║
║  │   [=====]                                              │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Sketch 2: Mobile Layout (Stacked)
```
╔═══════════════════════════╗
║ ☰  Road Casualties 2011-21║
╠═══════════════════════════╣
║                           ║
║  Total Increase           ║
║     +16.4%                ║
║   5,471 casualties        ║
║                           ║
╠═══════════════════════════╣
║  [▼ Select Dimension]     ║
╠═══════════════════════════╣
║                           ║
║  ┌─────────────────────┐  ║
║  │  Cyclists           │  ║
║  │  ████████ +51.4%    │  ║
║  │                     │  ║
║  │  Car Drivers        │  ║
║  │  ██████ +21.7%      │  ║
║  └─────────────────────┘  ║
║                           ║
║  [Tap for details]        ║
║                           ║
╚═══════════════════════════╝
```

---

## Technical Implementation Notes

### Libraries & Tools
- **D3.js v7**: Core visualization library
- **D3-annotation**: For chart annotations
- **Responsive design**: CSS Grid + Flexbox
- **Accessibility**: ARIA labels, semantic HTML
- **Performance**: Virtual scrolling for large datasets

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Targets
- Initial load: < 3 seconds
- Interaction response: < 100ms
- Smooth animations: 60fps
- Lighthouse score: > 90

---

## Data Integrity Measures

1. **No Truncated Axes**: All Y-axes start at 0
2. **Proportional Scaling**: Bubble sizes use square root scale
3. **Clear Baselines**: Zero lines clearly marked
4. **Honest Comparisons**: Same scale for 2011/2021 comparisons
5. **Source Attribution**: Data source clearly cited
6. **Uncertainty**: Missing data (546/629) clearly marked

---

## Accessibility Checklist

- [ ] WCAG 2.1 AA color contrast (4.5:1 minimum)
- [ ] Keyboard navigation for all interactions
- [ ] Screen reader compatible (ARIA labels)
- [ ] Colorblind-safe palettes
- [ ] Text alternatives for all visual content
- [ ] Focus indicators on interactive elements
- [ ] Minimum touch target size: 44x44px
- [ ] Resizable text up to 200% without loss of functionality
- [ ] No content conveyed by color alone

---

**Last Updated**: May 4, 2026
**Project**: COS30045 Data Visualization Project
**Data Source**: Australian Road Casualties 2011-2021
