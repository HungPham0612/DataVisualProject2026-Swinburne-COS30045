# Australian Road Casualties Data Visualization (2011-2021)

## Project Overview

This interactive data visualization website analyzes Australian road casualty statistics, comparing data from 2011 and 2021 across multiple dimensions including gender, age groups, road user types, counterparty types, and geographic remoteness.

**Course**: COS30045 Data Visualization
**Institution**: Swinburne University of Technology
**Last Updated**: May 2026

---

## Features

### Interactive Visualizations

1. **Overview Chart** - Grouped bar chart comparing 2011 vs 2021 casualties
2. **Age Group Analysis** - Line chart with area fill showing trends across age groups
3. **Gender Distribution** - Interactive donut chart
4. **Road User Type** - Horizontal bar chart with color-coded changes
5. **Counterparty Analysis** - Scatter plot with bubble sizes representing magnitude
6. **Remoteness Analysis** - Grouped bar chart comparing major cities vs regional areas

### Interactive Features

- **Hover Tooltips**: Detailed information on hover
- **Filtering**: Filter by dimension (Gender, Age Group, Road User Type, etc.)
- **Sorting**: Sort by percentage change, absolute change, or category name
- **View Modes**: Toggle between 2011, 2021, or both years
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Keyboard Navigation**: Full accessibility support
- **Smooth Animations**: Engaging transitions between states

---

## File Structure

```
DataVisualProject2026-Swinburne-COS30045/
├── index.html                  # Main HTML file
├── DESIGN_DOCUMENTATION.md     # Complete design documentation
├── README.md                   # This file
├── data/
│   └── data_file.csv          # Road casualty data
└── assest/
    ├── css/
    │   └── style.css          # All styling
    ├── js/
    │   ├── main.js            # Core functionality & utilities
    │   └── charts.js          # D3.js visualizations
    └── img/                   # Images (if needed)
```

---

## How to Run

### Option 1: Local Web Server (Recommended)

Due to browser security restrictions with loading CSV files, you need to run a local web server:

**Using Python 3:**
```bash
cd /Users/kyle/Swinburne/COS30045/DataVisualProject2026-Swinburne-COS30045
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
Install the "Live Server" extension and click "Go Live"

### Option 2: Direct File Access

Some browsers allow direct file access. Simply open `index.html` in your browser, but this may not work with all browsers due to CORS restrictions.

---

## Design Documentation

For detailed information about the design decisions, see `DESIGN_DOCUMENTATION.md` which includes:

- **3.1 Website Design**: Wireframe and storyboard
- **3.2 Visualization Design**: Chart type justifications, design principles, color palettes, and accessibility features
- **3.3 Interaction Design**: Complete interaction table with all user interactions

---

## Technology Stack

### Libraries & Frameworks
- **D3.js v7**: Data visualization
- **D3-annotation**: Chart annotations
- **Vanilla JavaScript**: Core functionality
- **CSS Grid & Flexbox**: Responsive layout

### Design Principles
- **Graphical Integrity**: No misleading charts, all axes start at zero
- **Accessibility**: WCAG 2.1 AA compliant
  - Colorblind-safe palettes
  - Keyboard navigation
  - ARIA labels
  - Minimum font size 14px
- **Responsiveness**: Mobile-first design with breakpoints at 768px and 1024px

---

## Data Structure

The dataset (`data/data_file.csv`) contains the following fields:

| Field | Description |
|-------|-------------|
| `dimension` | Category type (Gender, Age Group, Road User Type, Counterparty, Remoteness) |
| `group` | Specific category within dimension |
| `count_2011` | Number of casualties in 2011 |
| `count_2021` | Number of casualties in 2021 |
| `absolute_change` | Difference between 2021 and 2011 |
| `percentage_change` | Percentage change from 2011 to 2021 |
| `change_direction` | "Increase" or "Decrease" |

---

## Key Insights from the Data

1. **Overall Increase**: 16.4% increase in total casualties (+5,471)
2. **Pedal Cyclists**: Largest percentage increase at 51.4% (+2,772 casualties)
3. **Age Group 65-74**: Highest increase among age groups at 53.4% (+1,050)
4. **Pedestrians**: Notable decrease of 15.3% (-420 casualties)
5. **Major Cities**: Saw the largest absolute increase of 4,485 casualties

---

## Interactive Features Guide

### Filtering
Use the dropdown at the top of the Overview section to filter by dimension:
- All Dimensions (default)
- Gender
- Age Group
- Road User Type
- Counterparty
- Remoteness

### Sorting
Sort the overview chart by:
- Group Name (alphabetical)
- Percentage Change (highest to lowest)
- Absolute Change (magnitude)
- 2021 Count (largest to smallest)

### View Modes
Toggle between:
- Both Years (default) - Shows 2011 and 2021 side-by-side
- 2011 Only - Shows only 2011 data
- 2021 Only - Shows only 2021 data

### Gender Chart
Select which year to display:
- 2011
- 2021
- Change (absolute change between years)

---

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Accessibility Features

### Keyboard Navigation
- **Tab**: Move between interactive elements
- **Enter/Space**: Activate focused element
- **Arrow Keys**: Navigate within charts

### Screen Reader Support
- All charts have ARIA labels
- Semantic HTML structure
- Alt text for all visual content

### Visual Accessibility
- High contrast mode support
- Colorblind-safe color palettes
- Minimum 4.5:1 color contrast ratio
- Resizable text (up to 200%)
- No information conveyed by color alone

### Motion Sensitivity
- Respects `prefers-reduced-motion` setting
- Can disable animations in browser settings

---

## Performance Optimization

- Efficient D3.js rendering
- Debounced resize handlers
- Virtual scrolling for large datasets
- Lazy loading of charts
- Optimized SVG rendering

**Performance Targets:**
- Initial load: < 3 seconds
- Interaction response: < 100ms
- Smooth 60fps animations

---

## Future Enhancements

Potential additions for future versions:
- [ ] Export charts as PNG/SVG
- [ ] Download filtered data as CSV
- [ ] Additional time periods (2016, etc.)
- [ ] Animated transitions between years
- [ ] Comparison mode (side-by-side dimensions)
- [ ] Print-optimized views
- [ ] Share functionality for specific insights
- [ ] Data filtering by multiple dimensions simultaneously

---

## Troubleshooting

### Charts Not Displaying
**Problem**: Charts are empty or not loading
**Solution**:
1. Ensure you're running a local web server (not opening file:// directly)
2. Check browser console for errors
3. Verify `data/data_file.csv` exists and is accessible

### Responsive Layout Issues
**Problem**: Layout breaks on mobile
**Solution**:
1. Clear browser cache
2. Ensure viewport meta tag is present
3. Test in different browsers

### Performance Issues
**Problem**: Slow interactions or animations
**Solution**:
1. Close other browser tabs
2. Disable browser extensions
3. Use a modern browser (Chrome, Firefox, Edge)

---

## Credits

**Data Source**: Australian Road Casualties 2011-2021
**Developed By**: COS30045 Project Team
**Institution**: Swinburne University of Technology

---

## License

This project is developed for educational purposes as part of COS30045 Data Visualization course.

---

## Contact

For questions or feedback about this project, please contact the development team or your course instructor.

---

## Changelog

### Version 1.0 (May 2026)
- Initial release
- Complete implementation of all 6 visualizations
- Full responsive design
- Accessibility features
- Interactive filtering and sorting
- Comprehensive documentation
