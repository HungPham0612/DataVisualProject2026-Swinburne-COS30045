/**
 * D3.js Chart Implementations
 * Australian Road Casualties Visualization
 */

/**
 * 1. Overview Chart - Grouped Bar Chart
 */
function createOverviewChart() {
    // Clear existing chart
    d3.select('#overview-chart').selectAll('*').remove();

    const data = sortData(AppState.filteredData);

    if (data.length === 0) {
        d3.select('#overview-chart')
            .append('p')
            .style('text-align', 'center')
            .style('color', '#6c757d')
            .text('No data available for the selected filter');
        return;
    }

    // Dimensions
    const container = document.getElementById('overview-chart');
    const margin = { top: 20, right: 30, bottom: 80, left: 80 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select('#overview-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('role', 'img')
        .attr('aria-label', 'Grouped bar chart comparing 2011 and 2021 casualties')
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x0 = d3.scaleBand()
        .domain(data.map(d => d.group))
        .rangeRound([0, width])
        .paddingInner(0.1)
        .paddingOuter(0.1);

    const x1 = d3.scaleBand()
        .domain(['2011', '2021'])
        .rangeRound([0, x0.bandwidth()])
        .padding(0.05);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.count_2011, d.count_2021)) * 1.1])
        .nice()
        .range([height, 0]);

    // Color scale
    const color = d3.scaleOrdinal()
        .domain(['2011', '2021'])
        .range(['#4575b4', '#fdae61']);

    // Add gridlines
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickFormat('')
        );

    // Add X axis
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x0))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end')
        .style('font-size', '12px');

    // Add Y axis
    svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y).tickFormat(d => formatNumber(d)));

    // Y axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left + 20)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Number of Casualties');

    // Create groups for each category
    const groups = svg.selectAll('.group')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'group')
        .attr('transform', d => `translate(${x0(d.group)},0)`);

    // Add bars for 2011
    if (AppState.currentView === 'both' || AppState.currentView === '2011') {
        groups.append('rect')
            .attr('class', 'bar bar-2011')
            .attr('x', x1('2011'))
            .attr('width', x1.bandwidth())
            .attr('y', height)
            .attr('height', 0)
            .attr('fill', color('2011'))
            .attr('data-year', '2011')
            .on('mouseover', function(event, d) {
                d3.select(this).attr('opacity', 0.8);
                showTooltip(event, d, '2011');
            })
            .on('mousemove', (event) => Tooltip.move(event))
            .on('mouseout', function() {
                d3.select(this).attr('opacity', 1);
                Tooltip.hide();
            })
            .transition()
            .duration(800)
            .attr('y', d => y(d.count_2011))
            .attr('height', d => height - y(d.count_2011));
    }

    // Add bars for 2021
    if (AppState.currentView === 'both' || AppState.currentView === '2021') {
        groups.append('rect')
            .attr('class', 'bar bar-2021')
            .attr('x', x1('2021'))
            .attr('width', x1.bandwidth())
            .attr('y', height)
            .attr('height', 0)
            .attr('fill', color('2021'))
            .attr('data-year', '2021')
            .on('mouseover', function(event, d) {
                d3.select(this).attr('opacity', 0.8);
                showTooltip(event, d, '2021');
            })
            .on('mousemove', (event) => Tooltip.move(event))
            .on('mouseout', function() {
                d3.select(this).attr('opacity', 1);
                Tooltip.hide();
            })
            .transition()
            .duration(800)
            .attr('y', d => y(d.count_2021))
            .attr('height', d => height - y(d.count_2021));
    }

    // Tooltip function
    function showTooltip(event, d, year) {
        const count = year === '2011' ? d.count_2011 : d.count_2021;
        const html = `
            <strong>${d.group}</strong>
            <div class="tooltip-row">
                <span class="tooltip-label">Year:</span>
                <span class="tooltip-value">${year}</span>
            </div>
            <div class="tooltip-row">
                <span class="tooltip-label">Casualties:</span>
                <span class="tooltip-value">${formatNumber(count)}</span>
            </div>
            <div class="tooltip-change">
                Change: ${formatPercentage(d.percentage_change)}
                (${d.absolute_change > 0 ? '+' : ''}${formatNumber(d.absolute_change)})
            </div>
        `;
        Tooltip.show(html, event);
    }
}

/**
 * 2. Age Group Chart - Line Chart with Area
 */
function createAgeGroupChart() {
    d3.select('#age-chart').selectAll('*').remove();

    const ageData = AppState.data.filter(d => d.dimension === 'Age Group');

    const container = document.getElementById('age-chart');
    const margin = { top: 20, right: 30, bottom: 60, left: 70 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#age-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define age group order
    const ageOrder = ['0-7', '8-16', '17-25', '26-39', '40-64', '65-74', '75+'];
    const orderedData = ageOrder.map(age =>
        ageData.find(d => d.group === age)
    ).filter(d => d !== undefined);

    // Scales
    const x = d3.scalePoint()
        .domain(ageOrder)
        .range([0, width])
        .padding(0.5);

    const y = d3.scaleLinear()
        .domain([0, d3.max(orderedData, d => Math.max(d.count_2011, d.count_2021)) * 1.1])
        .nice()
        .range([height, 0]);

    // Add gridlines
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat(''));

    // X axis
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .style('font-size', '12px');

    // Y axis
    svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y).tickFormat(d => formatNumber(d)));

    // Y axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left + 20)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Casualties');

    // X axis label
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 10)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Age Group');

    // Area generator for 2011
    const area2011 = d3.area()
        .x(d => x(d.group))
        .y0(height)
        .y1(d => y(d.count_2011))
        .curve(d3.curveMonotoneX);

    // Area generator for 2021
    const area2021 = d3.area()
        .x(d => x(d.group))
        .y0(height)
        .y1(d => y(d.count_2021))
        .curve(d3.curveMonotoneX);

    // Line generator for 2011
    const line2011 = d3.line()
        .x(d => x(d.group))
        .y(d => y(d.count_2011))
        .curve(d3.curveMonotoneX);

    // Line generator for 2021
    const line2021 = d3.line()
        .x(d => x(d.group))
        .y(d => y(d.count_2021))
        .curve(d3.curveMonotoneX);

    // Add area for 2011
    svg.append('path')
        .datum(orderedData)
        .attr('class', 'area')
        .attr('fill', '#4575b4')
        .attr('fill-opacity', 0.2)
        .attr('d', area2011);

    // Add area for 2021
    svg.append('path')
        .datum(orderedData)
        .attr('class', 'area')
        .attr('fill', '#fdae61')
        .attr('fill-opacity', 0.2)
        .attr('d', area2021);

    // Add line for 2011
    svg.append('path')
        .datum(orderedData)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', '#4575b4')
        .attr('stroke-width', 3)
        .attr('d', line2011);

    // Add line for 2021
    svg.append('path')
        .datum(orderedData)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', '#fdae61')
        .attr('stroke-width', 3)
        .attr('d', line2021);

    // Add dots for 2011
    svg.selectAll('.dot-2011')
        .data(orderedData)
        .enter()
        .append('circle')
        .attr('class', 'dot dot-2011')
        .attr('cx', d => x(d.group))
        .attr('cy', d => y(d.count_2011))
        .attr('r', 5)
        .attr('fill', '#4575b4')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            d3.select(this).attr('r', 7);
            showAgeTooltip(event, d, '2011');
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this).attr('r', 5);
            Tooltip.hide();
        });

    // Add dots for 2021
    svg.selectAll('.dot-2021')
        .data(orderedData)
        .enter()
        .append('circle')
        .attr('class', 'dot dot-2021')
        .attr('cx', d => x(d.group))
        .attr('cy', d => y(d.count_2021))
        .attr('r', 5)
        .attr('fill', '#fdae61')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            d3.select(this).attr('r', 7);
            showAgeTooltip(event, d, '2021');
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this).attr('r', 5);
            Tooltip.hide();
        });

    // Legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width - 120}, 0)`);

    legend.append('line')
        .attr('x1', 0).attr('x2', 30)
        .attr('y1', 0).attr('y2', 0)
        .attr('stroke', '#4575b4')
        .attr('stroke-width', 3);

    legend.append('text')
        .attr('x', 35).attr('y', 5)
        .style('font-size', '12px')
        .text('2011');

    legend.append('line')
        .attr('x1', 0).attr('x2', 30)
        .attr('y1', 20).attr('y2', 20)
        .attr('stroke', '#fdae61')
        .attr('stroke-width', 3);

    legend.append('text')
        .attr('x', 35).attr('y', 25)
        .style('font-size', '12px')
        .text('2021');

    function showAgeTooltip(event, d, year) {
        const count = year === '2011' ? d.count_2011 : d.count_2021;
        const html = `
            <strong>Age Group: ${d.group}</strong>
            <div class="tooltip-row">
                <span class="tooltip-label">Year:</span>
                <span class="tooltip-value">${year}</span>
            </div>
            <div class="tooltip-row">
                <span class="tooltip-label">Casualties:</span>
                <span class="tooltip-value">${formatNumber(count)}</span>
            </div>
            <div class="tooltip-change">
                Change: ${formatPercentage(d.percentage_change)}
            </div>
        `;
        Tooltip.show(html, event);
    }
}

/**
 * 3. Gender Chart - Donut Chart
 */
function createGenderChart(year) {
    d3.select('#gender-chart').selectAll('*').remove();

    const genderData = AppState.data.filter(d => d.dimension === 'Gender');

    const container = document.getElementById('gender-chart');
    const width = container.clientWidth;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 40;

    const svg = d3.select('#gender-chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    // Prepare data based on year
    const data = genderData.map(d => ({
        gender: d.group,
        value: year === '2011' ? d.count_2011 :
               year === '2021' ? d.count_2021 :
               d.absolute_change
    }));

    const total = d3.sum(data, d => d.value);

    // Color scale
    const color = d3.scaleOrdinal()
        .domain(['Male', 'Female'])
        .range(['#4575b4', '#e66c96']);

    // Pie generator
    const pie = d3.pie()
        .value(d => d.value)
        .sort(null);

    // Arc generator
    const arc = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);

    const arcHover = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 1.05);

    // Create arcs
    const arcs = svg.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.gender))
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('d', arcHover);

            const percentage = (d.data.value / total * 100).toFixed(1);
            const html = `
                <strong>${d.data.gender}</strong>
                <div class="tooltip-row">
                    <span class="tooltip-label">${year === 'change' ? 'Change:' : 'Casualties:'}</span>
                    <span class="tooltip-value">${formatNumber(d.data.value)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">Percentage:</span>
                    <span class="tooltip-value">${percentage}%</span>
                </div>
            `;
            Tooltip.show(html, event);
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('d', arc);
            Tooltip.hide();
        });

    // Add labels
    arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('font-weight', '600')
        .style('fill', '#fff')
        .text(d => d.data.gender);

    // Center text
    svg.append('text')
        .attr('text-anchor', 'middle')
        .style('font-size', '24px')
        .style('font-weight', '700')
        .style('fill', '#2c3e50')
        .attr('dy', '-0.5em')
        .text(formatNumber(total));

    svg.append('text')
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .attr('dy', '1em')
        .text(year === 'change' ? 'Total Change' : `Total ${year}`);
}

// Update gender chart when year changes
function updateGenderChart(year) {
    createGenderChart(year);
}

/**
 * 4. Road User Type Chart - Horizontal Bar Chart
 */
function createRoadUserChart() {
    d3.select('#road-user-chart').selectAll('*').remove();

    const roadUserData = AppState.data
        .filter(d => d.dimension === 'Road User Type')
        .sort((a, b) => a.percentage_change - b.percentage_change);

    const container = document.getElementById('road-user-chart');
    const margin = { top: 20, right: 60, bottom: 40, left: 200 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select('#road-user-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3.scaleLinear()
        .domain([
            d3.min(roadUserData, d => d.percentage_change) * 1.1,
            d3.max(roadUserData, d => d.percentage_change) * 1.1
        ])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(roadUserData.map(d => d.group))
        .range([0, height])
        .padding(0.2);

    // Add zero line
    svg.append('line')
        .attr('x1', x(0))
        .attr('x2', x(0))
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke', '#2c3e50')
        .attr('stroke-width', 2);

    // Add X axis
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => d + '%'));

    // Add Y axis
    svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y))
        .selectAll('text')
        .style('font-size', '12px');

    // Add bars
    svg.selectAll('.bar')
        .data(roadUserData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => d.percentage_change >= 0 ? x(0) : x(d.percentage_change))
        .attr('y', d => y(d.group))
        .attr('width', 0)
        .attr('height', y.bandwidth())
        .attr('fill', d => d.change_direction === 'Increase' ? '#d73027' : '#1a9850')
        .on('mouseover', function(event, d) {
            d3.select(this).attr('opacity', 0.8);
            const html = `
                <strong>${d.group}</strong>
                <div class="tooltip-row">
                    <span class="tooltip-label">Percentage Change:</span>
                    <span class="tooltip-value">${formatPercentage(d.percentage_change)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">Absolute Change:</span>
                    <span class="tooltip-value">${d.absolute_change > 0 ? '+' : ''}${formatNumber(d.absolute_change)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">2011:</span>
                    <span class="tooltip-value">${formatNumber(d.count_2011)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">2021:</span>
                    <span class="tooltip-value">${formatNumber(d.count_2021)}</span>
                </div>
            `;
            Tooltip.show(html, event);
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this).attr('opacity', 1);
            Tooltip.hide();
        })
        .transition()
        .duration(800)
        .attr('width', d => Math.abs(x(d.percentage_change) - x(0)));

    // X axis label
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 5)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Percentage Change (%)');
}

/**
 * 5. Counterparty Chart - Scatter Plot
 */
function createCounterpartyChart() {
    d3.select('#counterparty-chart').selectAll('*').remove();

    const counterpartyData = AppState.data.filter(d => d.dimension === 'Counterparty');

    const container = document.getElementById('counterparty-chart');
    const margin = { top: 20, right: 30, bottom: 60, left: 70 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#counterparty-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3.scaleLinear()
        .domain([
            d3.min(counterpartyData, d => d.percentage_change) * 1.2,
            d3.max(counterpartyData, d => d.percentage_change) * 1.2
        ])
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(counterpartyData, d => d.count_2021) * 1.1])
        .range([height, 0]);

    const size = d3.scaleSqrt()
        .domain([0, d3.max(counterpartyData, d => Math.abs(d.absolute_change))])
        .range([5, 30]);

    // Add gridlines
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat(''));

    svg.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(-height).tickFormat(''));

    // Add axes
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => d + '%'));

    svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y).tickFormat(d => formatNumber(d)));

    // Axis labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 10)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Percentage Change (%)');

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left + 20)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('2021 Casualties');

    // Add circles
    svg.selectAll('.bubble')
        .data(counterpartyData)
        .enter()
        .append('circle')
        .attr('class', 'bubble')
        .attr('cx', d => x(d.percentage_change))
        .attr('cy', d => y(d.count_2021))
        .attr('r', 0)
        .attr('fill', d => d.change_direction === 'Increase' ? '#d73027' : '#1a9850')
        .attr('opacity', 0.7)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .attr('opacity', 1)
                .attr('stroke-width', 3);

            const html = `
                <strong>${d.group}</strong>
                <div class="tooltip-row">
                    <span class="tooltip-label">2021 Count:</span>
                    <span class="tooltip-value">${formatNumber(d.count_2021)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">% Change:</span>
                    <span class="tooltip-value">${formatPercentage(d.percentage_change)}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">Absolute Change:</span>
                    <span class="tooltip-value">${d.absolute_change > 0 ? '+' : ''}${formatNumber(d.absolute_change)}</span>
                </div>
            `;
            Tooltip.show(html, event);
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this)
                .attr('opacity', 0.7)
                .attr('stroke-width', 2);
            Tooltip.hide();
        })
        .transition()
        .duration(800)
        .attr('r', d => size(Math.abs(d.absolute_change)));
}

/**
 * 6. Remoteness Chart - Grouped Bar Chart
 */
function createRemotenessChart() {
    d3.select('#remoteness-chart').selectAll('*').remove();

    const remotenessData = AppState.data
        .filter(d => d.dimension === 'Remoteness' && d.group !== 'Missing')
        .sort((a, b) => b.count_2021 - a.count_2021);

    const container = document.getElementById('remoteness-chart');
    const margin = { top: 20, right: 30, bottom: 60, left: 70 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#remoteness-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x0 = d3.scaleBand()
        .domain(remotenessData.map(d => d.group))
        .rangeRound([0, width])
        .paddingInner(0.1);

    const x1 = d3.scaleBand()
        .domain(['2011', '2021'])
        .rangeRound([0, x0.bandwidth()])
        .padding(0.05);

    const y = d3.scaleLinear()
        .domain([0, d3.max(remotenessData, d => Math.max(d.count_2011, d.count_2021)) * 1.1])
        .nice()
        .range([height, 0]);

    const color = d3.scaleOrdinal()
        .domain(['2011', '2021'])
        .range(['#4575b4', '#fdae61']);

    // Add gridlines
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat(''));

    // Add axes
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x0))
        .selectAll('text')
        .style('font-size', '12px');

    svg.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(y).tickFormat(d => formatNumber(d)));

    // Y axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left + 20)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('fill', '#6c757d')
        .text('Number of Casualties');

    // Create groups
    const groups = svg.selectAll('.group')
        .data(remotenessData)
        .enter()
        .append('g')
        .attr('transform', d => `translate(${x0(d.group)},0)`);

    // Add bars
    groups.selectAll('.bar')
        .data(d => ['2011', '2021'].map(year => ({
            year: year,
            value: year === '2011' ? d.count_2011 : d.count_2021,
            data: d
        })))
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x1(d.year))
        .attr('width', x1.bandwidth())
        .attr('y', height)
        .attr('height', 0)
        .attr('fill', d => color(d.year))
        .on('mouseover', function(event, d) {
            d3.select(this).attr('opacity', 0.8);
            const html = `
                <strong>${d.data.group}</strong>
                <div class="tooltip-row">
                    <span class="tooltip-label">Year:</span>
                    <span class="tooltip-value">${d.year}</span>
                </div>
                <div class="tooltip-row">
                    <span class="tooltip-label">Casualties:</span>
                    <span class="tooltip-value">${formatNumber(d.value)}</span>
                </div>
                <div class="tooltip-change">
                    Total Change: ${formatPercentage(d.data.percentage_change)}
                </div>
            `;
            Tooltip.show(html, event);
        })
        .on('mousemove', (event) => Tooltip.move(event))
        .on('mouseout', function() {
            d3.select(this).attr('opacity', 1);
            Tooltip.hide();
        })
        .transition()
        .duration(800)
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value));
}
