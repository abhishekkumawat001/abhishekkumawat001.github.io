---
layout: post
title: "Navigating the Waves: My M.Tech Research Journey in SWOT Satellite Data Analysis"
date: 2026-03-28 10:00:00
description: A deep dive into oceanographic research, satellite data integration, and the lessons learned analyzing SWOT, GHRSST, and AVISO data to study ocean dynamics and cyclone responses.
tags: [oceanography, satellite-data, research, machine-learning, python]
categories: [research-journey]
giscus_comments: true
related_posts: true
thumbnail:
featured: true
toc:
  sidebar: left
---

## The Beginning: A Quest to Understand Ocean Dynamics

As an M.Tech student diving into oceanographic research, I embarked on an ambitious project: analyzing **SWOT (Surface Water and Ocean Topography)** satellite data to understand ocean dynamics, internal waves, and the response of the ocean to extreme weather events like cyclones. Little did I know that this journey would be filled with technical challenges, unexpected discoveries, and countless iterations of code refinement.

---

## The Research Vision

The core objective was ambitious: to integrate multi-source satellite data (**SWOT SSH**, **GHRSST SST**, and **AVISO MSLA**) to study:

- Internal wave propagation and characteristics
- Mesoscale phenomena (eddies) and their seasonal patterns
- Ocean response to cyclones (Cyclone Shakti, Remal, and Dana)
- Sub-mesoscale and mesoscale, large-scale interactions

---

## Phase 1: The Foundation — Literature and Data Discovery

> **January 2026**

The journey began with extensive groundwork:

- Surveying SAR images containing internal waves
- Conducting literature reviews on internal wave physics
- Identifying SWOT orbital tracks intersecting our region of interest (peviously Andaman Sea, Now Bay of bengal)
- **First Challenge**: Understanding the AVISO website's shapefile system to extract correct pass numbers

### The Learning Curve

I quickly realized that oceanographic data science wasn't just about coding, it required understanding the **physics**, **satellite geometry**, and **data structures** that satellite agencies use. The SWOT-OpenToolkit became my mentor, teaching me how orbital passes work and how to navigate Earth's ocean swaths for Swot.

---

## Phase 2: Data Pipeline Development — When Everything Broke

> **Feburay 2026**

The first real technical challenge. Downloading and processing Level 3 SWOT data required significant engineering:

```python
# Key achievements:
# - Developed sorting pipeline (sorting_one_time_run.ipynb)
# - Created visualization scripts for orbital passes
# - Implemented cross-swath bias corrections
# - Built scripts for daily and monthly statistics calculations
```

### The First Major Setback

**Unicode encoding errors** plagued the initial scripts. Data files from different sources used different character encodings, causing crashes mid-analysis. Instead of giving up, I:

1. Developed multiple versions with varying complexity levels (simple → enhanced → advanced)
2. Created robust error handling wrappers
3. Built a comprehensive README for troubleshooting

<div class="alert alert-info" role="alert">
  <strong>Lesson Learned:</strong> Defensive programming and graceful error handling are not optional in research code.
</div>

---

## Phase 3: The Multi-Source Integration Challenge

> **Mid-March 2026**

Now came the real complexity: integrating data from three different sources:

| Data Source    | Description             | Coverage                   |
| -------------- | ----------------------- | -------------------------- |
| **SWOT SSH**   | Sea Surface Height      | High-resolution, sparse    |
| **GHRSST SST** | Sea Surface Temperature | Global, daily              |
| **AVISO MSLA** | Mean Sea Level Anomaly  | Synoptic scale, consistent |

### Technical Hurdles

- Different spatial/temporal resolutions
- Varying data formats and projections
- Missing or invalid data points
- Computational bottlenecks with large netCDF files

### The Breakthrough

I realized that instead of forcing these datasets into one unified pipeline, I needed **purpose-built visualizations**:

- Subplot frameworks for temporal slicing
- Gaussian filtering for scale separation
- Forward/backward pass compositing
- Seasonal analysis workflows

---

## Phase 4: The Cyclone Response Study

> **Late March 2026 — Present**

This is where the research truly came alive. By analyzing three distinct cyclone events:

- **Cyclone Remal** (year 2024)
- **Cyclone Dana** (year 2024)

I developed a methodology to extract 10-15 days of pre- and post-cyclone data, visualizing:

- SSH anomalies before, during, and after each event
- SST responses showing cooling and recovery
- Eddy formation and propagation patterns

### Visual Insights

The generated composite plots (forward and backward passes) revealed:

- Clear SSH depressions associated with cyclone passages
- Temperature cooling signatures matching dynamic heights
- Eddy formation mechanisms following cyclone dissipation

---

## Ups and Downs: The Rollercoaster

### Major Wins ✅

1. Successfully built end-to-end data pipeline processing terabytes of oceanic data
2. Generated 20+ publication-quality visualizations
3. Discovered coherent patterns in cyclone response across multiple seasons
4. Created reusable, modular code for future researchers
5. Integrated three challenging datasets into unified analysis framework

### Significant Setbacks ⚠️

1. **Initial tool selection**: Spent days debugging incompatible libraries before settling on xarray + netCDF4
2. **Data quality issues**: Many satellite passes had instrumental noise requiring extensive filtering
3. **Computational limits**: Processing gigabytes of raw data revealed memory bottlenecks
4. **Temporal gaps**: Missing data during sensor downtime complicated continuous analysis
5. **Scope creep**: The urge to analyze "just one more cyclone" nearly derailed timeline

### The Pivotal Moment

Around March 26th, after weeks of refinement, I realized that the data wasn't just noise—**it was telling a story**. The subtle patterns in SSHA (Sea Surface Height Anomaly) aligned perfectly with independent SST variations. This moment of validation was worth every debugging session.

---

## Technical Architecture: What Worked

```
Data Ingestion
    ↓
Preprocessing (sorting, filtering, cross-swath correction)
    ↓
Multi-source Integration (SSH + SST + MSLA)
    ↓
Scale Decomposition (sub-mesoscale, mesoscale, large-scale)
    ↓
Event-based Analysis (cyclone pre/during/post extraction)
    ↓
Visualization & Statistics Generation
```

---

## Lessons That Will Stay With Me

### 1. Start Simple, Iterate Relentlessly

Three versions of the analysis script: simple, enhanced, advanced. Each iteration taught me new failure modes and solutions.

### 2. Physics Informs Code

Understanding Coriolis forcing, geostrophic balance, and vortex dynamics made data patterns intelligible. **Code mirrors physical understanding.**

### 3. Visualization is Discovery

Compositing forward and backward passes revealed orbital geometry I initially missed. A single well-designed plot often communicates more than 10,000 data points.

### 4. Documentation Saves Future-You

The comprehensive README prevented many _"What was I thinking?"_ moments. Good documentation made it easy to onboard the analysis concept to collaborators.

### 5. Embrace Messy Research

Not everything works on the first try. _"Fail fast, learn faster"_ became my motto. Each dead-end revealed something about the data or my assumptions.

---

## Where We Stand Now

**Project Status**: 85% Complete

| Component                        | Status                                       |
| -------------------------------- | -------------------------------------------- |
| Data pipeline                    | ✅ Robust and production-ready               |
| Internal wave analysis           | ✅ Conceptualized, initial results promising |
| Cyclone response study           | ✅ Core analysis complete                    |
| Advanced scale separation        | ⏳ In progress                               |
| Statistical significance testing | ⏳ Next phase                                |

---

## Looking Forward

The remaining journey involves:

1. Quantifying internal wave characteristics across seasons
2. Statistical rigor: hypothesis testing for cyclone impacts
3. Inter-dataset consistency checks
4. Manuscript preparation
5. Potential publication at oceanography conferences

---

## Closing Thoughts

This M.Tech project has been far more than an academic exercise. It's been a masterclass in **scientific computing**, **problem-solving under uncertainty**, and the **patience** required to coax meaningful insights from raw data. The ocean is beautifully complex, and satellite data—while revolutionary—is just one lens through which to view it.

> To future researchers starting similar projects: expect setbacks, celebrate small wins, document everything, and never underestimate the power of visualization. The data wants to tell its story; you just need the right tools and persistence to listen.

---

_This journey continues, one orbit at a time._

**Project Details:**

- **Repository**: SWOT-OpenToolkit integration with multi-source oceanographic data
- **Study Region**: Andaman Sea
- **Key Satellites**: SWOT, Copernicus Marine, PODAAC
- **Methods**: Python, Jupyter, xarray, Visualization, Statistical Analysis
