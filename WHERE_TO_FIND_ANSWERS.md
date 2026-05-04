# Quick Reference: Where to Find Assignment Answers

## For Markers: Quick Navigation Guide

This document helps you quickly locate the answer to each assignment requirement.

---

## 3.1 Website Design

### Question: Create a wireframe of your webpage layout

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 8-93
- **Section**: "3.1 Website Design"

**What You'll Find:**
- Navigation structure (lines 12-16)
- Complete wireframe layout (lines 18-65)
- Desktop wireframe ASCII art (lines 68-85)
- Mobile wireframe ASCII art (lines 87-93)

**Live Implementation:**
- **File**: `index.html`
- All sections implemented with semantic HTML

---

### Question: Create a storyboard showing user interactions

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 95-136
- **Section**: "Storyboard - User Journey"

**What You'll Find:**
- User persona: Sarah (road safety researcher)
- 5-step interaction journey
- Clear progression from landing to insights
- How visualizations answer user questions

**Live Demonstration:**
- Open `index.html` in browser
- Follow the steps in the storyboard
- All interactions work as described

---

## 3.2 Visualization Design

### Question: Explain chart types chosen and why appropriate

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 140-225
- **Section**: "Chart Types & Justification"

**Chart-by-Chart Breakdown:**

**Chart 1: Grouped Bar Chart**
- Lines: 144-155
- Implementation: `charts.js` lines 9-122
- Why: Best for comparing discrete categories across two years

**Chart 2: Line Chart with Area**
- Lines: 157-170
- Implementation: `charts.js` lines 124-299
- Why: Shows trends across ordered categories (age groups)

**Chart 3: Donut Chart**
- Lines: 172-183
- Implementation: `charts.js` lines 301-404
- Why: Clear part-to-whole for binary gender comparison

**Chart 4: Horizontal Bar Chart**
- Lines: 185-198
- Implementation: `charts.js` lines 406-533
- Why: Accommodates long labels, shows directional change

**Chart 5: Scatter Plot**
- Lines: 200-212
- Implementation: `charts.js` lines 535-653
- Why: Multi-dimensional analysis, reveals patterns

**Chart 6: Grouped Bar Chart (Remoteness)**
- Lines: 214-225
- Implementation: `charts.js` lines 655-773
- Why: Geographic comparison with limited categories

---

### Question: Discuss adherence to good design principles

**Graphical Integrity:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 464-469
- **Key Points**: No truncated axes, proportional scaling, clear baselines

**Accessibility:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 249-268
- **Key Points**:
  - Colorblind-safe palettes (lines 249-261)
  - Font sizes (lines 263-268)
  - WCAG 2.1 AA compliance
  - Implementation: `style.css` lines 698-749

**Scalability:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 270-280
- **Key Points**: Responsive breakpoints, mobile-first design
- **Implementation**: `style.css` lines 631-696

---

### Question: Explain graphical elements usage

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 282-295
- **Table**: Complete mapping of elements to data

**Elements Explained:**
- **Color**: Increase (red) vs Decrease (green) - Lines 282-295
- **Size**: Bubble size = absolute change magnitude
- **Position**: X/Y axes show different metrics
- **Shape**: Bars, lines, circles for different data types

---

### Question: Justify color choices

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 249-261
- **Section**: "Color Palette - Accessibility"

**What You'll Find:**
- Hex codes with semantic meaning
- Colorblind testing results
- Contrast ratios (4.5:1 minimum)
- Implementation: `style.css` lines 21-32

**Color Justifications:**
```
#d73027 (Red) = Increase = Concern/Alert
#1a9850 (Green) = Decrease = Safety Improvement
#4575b4 (Blue) = 2011 Baseline = Neutral
#fdae61 (Orange) = 2021 Comparison = Highlight
```

---

### Question: Justify labelling decisions

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: Charts section includes all labelling decisions

**Implementation Files:**
- All charts in `charts.js` have clear axis labels
- X-axis: Category names or percentages
- Y-axis: "Number of Casualties" with units
- Legends: Positioned consistently (below or top-right)

---

### Question: Justify layout decisions

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 270-280 (Grid system)
- **Lines**: 355-371 (Layout sketches)

**Implementation:**
- **File**: `style.css`
- **Lines**: 85-103 (Grid and containers)
- **Lines**: 631-696 (Responsive breakpoints)

**Key Decisions:**
- 12-column grid system
- 60px vertical section padding
- 40px between charts
- Responsive stacking on mobile

---

### Question: Describe annotations and tooltips

**Annotations:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 297-314
- **Implementation**: Various annotations in `charts.js`
- **Example**: Age chart line 168 (peak increase annotation)

**Tooltips:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 316-353
- **Implementation**: `main.js` lines 201-249
- **Features**:
  - 200ms delay
  - Auto-positioning
  - High contrast (21:1)
  - Complete data display

---

## 3.3 Interaction Design

### Question: Describe interactive features

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 373-402
- **Section**: "Interactive Features Overview"

**Features List:**
1. Hover interactions - Line 389
2. Click interactions - Line 390
3. Filtering - Line 391
4. Sorting - Line 392
5. Zoom/Pan - Line 393 (future)
6. Transitions - Line 394
7. View toggling - Line 395
8. Keyboard navigation - Line 396

**Live Implementation:**
- Filtering: `main.js` lines 158-164
- Sorting: `main.js` lines 167-173
- View modes: `main.js` lines 148-156
- Tooltips: `main.js` lines 201-249

---

### Question: Provide interaction table

**Primary Answer Location:**
- **File**: `DESIGN_DOCUMENTATION.md`
- **Lines**: 404-451
- **Table**: Complete interaction documentation

**Table Columns:**
1. Interaction Method
2. Trigger
3. User Behavior
4. System Response
5. Purpose

**Quick Summary:**
- 10+ interactions documented
- Each includes implementation reference
- Expected behavior clearly described
- System responses detailed

**Also Available:**
- **File**: `ASSIGNMENT_SUMMARY.md`
- **Lines**: 363-382 (Summarized version)

---

## Supporting Documentation

### Complete Design Rationale
**File**: `DESIGN_DOCUMENTATION.md`
- Comprehensive answers to all three sections
- 24KB of detailed documentation
- Professional formatting
- ASCII wireframes and diagrams

### Assignment Summary
**File**: `ASSIGNMENT_SUMMARY.md`
- Quick reference for markers
- Line-by-line file references
- Implementation details
- Self-assessment

### Requirements Checklist
**File**: `ASSIGNMENT_CHECKLIST.md`
- Verification of all requirements
- Testing completion status
- Grading rubric self-assessment
- Ready-for-submission checklist

### Technical Guide
**File**: `README.md`
- How to run the project
- Browser compatibility
- Troubleshooting
- Features overview

---

## Live Demonstration

### To View the Working Website:

**Step 1: Start Server**
```bash
cd /Users/kyle/Swinburne/COS30045/DataVisualProject2026-Swinburne-COS30045
./start-server.sh
```

Or manually:
```bash
python3 -m http.server 8000
```

**Step 2: Open Browser**
```
http://localhost:8000
```

**Step 3: Explore**
- Follow the storyboard from DESIGN_DOCUMENTATION.md
- Test each interaction from the interaction table
- Resize browser to see responsive design
- Use keyboard navigation (Tab, Enter, Arrows)

---

## File Organization for Submission

### Core Files (Required)
```
✓ index.html                    - Main webpage
✓ assest/css/style.css         - All styling
✓ assest/js/main.js            - Core functionality
✓ assest/js/charts.js          - D3.js visualizations
✓ data/data_file.csv           - Data source
```

### Documentation (Required)
```
✓ DESIGN_DOCUMENTATION.md      - Answers 3.1, 3.2, 3.3
✓ README.md                    - Technical guide
```

### Supporting Documentation (Recommended)
```
✓ ASSIGNMENT_SUMMARY.md        - Quick reference
✓ ASSIGNMENT_CHECKLIST.md      - Requirements verification
✓ WHERE_TO_FIND_ANSWERS.md     - This file
```

### Utilities
```
✓ start-server.sh              - Quick start script
```

---

## Quick Answer Lookup

### "Where is the wireframe?"
→ `DESIGN_DOCUMENTATION.md` lines 18-93

### "Where is the storyboard?"
→ `DESIGN_DOCUMENTATION.md` lines 95-136

### "Why did you choose these chart types?"
→ `DESIGN_DOCUMENTATION.md` lines 140-225

### "How do you ensure accessibility?"
→ `DESIGN_DOCUMENTATION.md` lines 249-268
→ `style.css` lines 698-749

### "Where is the interaction table?"
→ `DESIGN_DOCUMENTATION.md` lines 404-451

### "How do tooltips work?"
→ `DESIGN_DOCUMENTATION.md` lines 316-353
→ `main.js` lines 201-249

### "Where are the color choices justified?"
→ `DESIGN_DOCUMENTATION.md` lines 249-261

### "How is responsive design implemented?"
→ `DESIGN_DOCUMENTATION.md` lines 270-280
→ `style.css` lines 631-696

### "Where are the chart implementations?"
→ `charts.js` - All 6 charts
  - Chart 1: Lines 9-122
  - Chart 2: Lines 124-299
  - Chart 3: Lines 301-404
  - Chart 4: Lines 406-533
  - Chart 5: Lines 535-653
  - Chart 6: Lines 655-773

---

## Verification Checklist for Markers

Use this to quickly verify all requirements are met:

**3.1 Website Design:**
- [ ] Wireframe exists (DESIGN_DOCUMENTATION.md:18-93)
- [ ] Storyboard exists (DESIGN_DOCUMENTATION.md:95-136)
- [ ] Navigation structure explained (DESIGN_DOCUMENTATION.md:12-16)

**3.2 Visualization Design:**
- [ ] 6 chart types explained (DESIGN_DOCUMENTATION.md:140-225)
- [ ] Design principles discussed (DESIGN_DOCUMENTATION.md:227-280)
- [ ] Graphical integrity maintained (DESIGN_DOCUMENTATION.md:464-469)
- [ ] Accessibility features (DESIGN_DOCUMENTATION.md:249-268)
- [ ] Scalability addressed (DESIGN_DOCUMENTATION.md:270-280)
- [ ] Color choices justified (DESIGN_DOCUMENTATION.md:249-261)
- [ ] Annotations described (DESIGN_DOCUMENTATION.md:297-314)
- [ ] Tooltips described (DESIGN_DOCUMENTATION.md:316-353)

**3.3 Interaction Design:**
- [ ] Features described (DESIGN_DOCUMENTATION.md:373-402)
- [ ] Interaction table provided (DESIGN_DOCUMENTATION.md:404-451)
- [ ] Implementation references included

**Live Implementation:**
- [ ] Website loads successfully
- [ ] All charts display correctly
- [ ] Interactions work as described
- [ ] Responsive design functions
- [ ] Accessibility features present

---

## Contact Information

For questions about this submission:
- Check README.md for technical issues
- Check DESIGN_DOCUMENTATION.md for design decisions
- Check ASSIGNMENT_CHECKLIST.md for requirements verification

---

**Last Updated**: May 4, 2026
**Project**: COS30045 Data Visualization
**Status**: Complete and ready for submission
