# L2 Vocabulary Learning System - Replication of Polysemy and Homonymy Acquisition Research

## 📋 Overview

This system is a web-based research application designed to measure vocabulary acquisition effects in second language (L2) learning, based on the study by González-Fernández & Webb (2024): "How well are primary and secondary meanings of L2 words acquired?"

**Original Paper**: González-Fernández, B., & Webb, S. (2024). How well are primary and secondary meanings of L2 words acquired? *Studies in Second Language Acquisition*, 1-23.

## 🎯 Research Objectives

This system is designed to investigate the following research questions:

1. **RQ1**: To what extent can new polysemous and homonymous meanings of familiar L2 words be learned deliberately and does prior L2 vocabulary knowledge affect this learning?

2. **RQ2**: Are there any differences between the deliberate acquisition of polysemous and homonymous meanings of familiar words, and the primary meaning of unknown words?

## 🔬 Experimental Design

### Participant Groups
- **Treatment Group**: 36 participants (flashcard learning + tests)
- **Control Group**: 30 participants (tests only)
- **Target Population**: Low-to-intermediate level EFL learners

### Target Vocabulary (30 words)
- **Secondary polysemous meanings**: 10 words (e.g., body "organization," chair "chairperson")
- **Secondary homonymous meanings**: 10 words (e.g., bank "embankment," pen "enclosure")  
- **Primary meanings of unknown words**: 10 words (e.g., flesh "meat," hutch "small shelter")

### Experimental Procedure
1. **Pretest** (1 week prior): Meaning recall + meaning recognition tests
2. **Learning Session** (15 minutes): Flashcard learning (10 min learning + 5 min retrieval)
3. **Immediate Posttest**: Tests immediately after treatment
4. **Delayed Posttest** (1 week later): Retention measurement

## 📊 Key Findings from Original Paper

### 🔍 **Major Discoveries**
1. **Learning secondary meanings of familiar words is as difficult as learning primary meanings of unfamiliar words**
   - Meaning recognition: Secondary meanings 90.12% vs Primary meanings 86.8%
   - Meaning recall: Secondary meanings 71.8% vs Primary meanings 70.3%

2. **No significant difference between polysemy and homonymy acquisition**
   - Etymological relatedness does not affect learning outcomes
   - L2 learners cannot leverage etymological connections between meanings

3. **Positive effect of prior vocabulary knowledge**
   - Learners with greater vocabulary knowledge acquire new meanings more easily

## 🖥️ System Requirements

- **Browser**: Chrome, Firefox, Safari, Edge (latest versions recommended)
- **JavaScript**: Must be enabled
- **Screen Resolution**: 1024×768 or higher recommended
- **Internet Connection**: Not required (works offline)

## 📁 File Structure

```
l2-vocabulary-acquisition-system/
├── index.html    # Main HTML file
├── polysemy_learning.js      # JavaScript file (experimental logic)
└── README.md                 # This file
```

## 🚀 Setup & Usage

### 1. File Preparation
```bash
# Download and place files in the same folder
l2-vocabulary-acquisition-system/
├── index.html
└── polysemy_learning.js
```

### 2. Experiment Implementation
1. Open `index.html` in web browser
2. Enter participant information (name, student ID)
3. Follow experimental protocol

### 3. Experimental Protocol (Following Original Paper)

#### **Session 1: Pretest (approx. 70 minutes)**
1. **Meaning Recall Test**: Describe meanings of 40 words in Japanese
2. **Vocabulary Levels Test**: Measure prior vocabulary knowledge
3. **Meaning Recognition Test**: Multiple choice questions for 40 words
4. **Language Background Questionnaire**

#### **Session 2: Learning + Immediate Test (approx. 60 minutes)**
1. **Flashcard Learning** (15 minutes)
   - 10 min: Free learning phase
   - 5 min: Retrieval practice phase
2. **Filler Task** (10 minutes): Questions about English learning experience
3. **Immediate Posttest**: Meaning recall + meaning recognition

#### **Session 3: Delayed Test (approx. 45 minutes)**
1. **One-week delayed posttest**: Retention effect measurement

## 📊 Data Collection & Analysis

### Measurement Instruments
- **Meaning Recall Test**: L2→L1 translation task
- **Meaning Recognition Test**: 5-option multiple choice (including "I don't know")
- **Learning Behavior Log**: Card flipping, shuffling, navigation records
- **Response Time**: Time taken for each question

### Statistical Analysis
- **Relative Gains Calculation**: `[(posttest score - pretest score) / (number of items - pretest score)] × 100`
- **Generalized Linear Mixed-Effects Models**: Analyze effects of vocabulary type, group, prior knowledge
- **Effect Sizes**: Cohen's d, eta squared

## 🔧 Experimental Conditions Setup

### Vocabulary Selection Criteria (Following Original Paper)
- **Word Length**: 3-5 letters
- **Part of Speech**: Nouns only
- **Frequency**: Known words within 2K, unknown words 3K-12K
- **Cognates**: Excluded cognates with participants' L1 (Japanese)
- **Etymological Classification**: Based on Oxford English Dictionary

### Definition of Polysemy and Homonymy
- **Polysemous**: Related meanings derived from the same origin
- **Homonymous**: Unrelated meanings from different origins
- **Peripheral Meanings**: Meanings listed third or later in dictionaries

## 📈 Educational Implications

### Recommendations from Original Paper
1. **Effectiveness of Deliberate Instruction**: Explicit flashcard instruction is effective
2. **Equal Learning Difficulty**: Secondary meanings require as much instructional effort as primary meanings
3. **Non-importance of Etymological Distinction**: Polysemy vs. homonymy distinction doesn't affect low-proficiency learners

### Practical Applications
- Importance of teaching multiple meanings of high-frequency words
- Ensuring adequate learning time for each new meaning
- Prioritizing explicit meaning presentation over etymological explanations

## ⚠️ Research Ethics & Precautions

### Experimental Implementation Notes
- **Informed Consent (IC) Required**
- **Data Anonymization Processing**
- **Right to Withdraw Guaranteed**
- **Consistent Implementation in Quiet Environment**

### Technical Limitations
- Data loss on browser reload
- JavaScript required
- Offline environment implementation

## 🔍 Differences from Original Paper

### Implementation Adjustments
1. **Language**: English→Spanish to English→Japanese
2. **Control Group**: Simplified control conditions in this system

### Additional Features
- **Real-time Progress Display**
- **Automatic Data Export**
- **Browser-based Implementation**

## 📚 Citation & References

### Original Paper
González-Fernández, B., & Webb, S. (2024). How well are primary and secondary meanings of L2 words acquired? *Studies in Second Language Acquisition*, 1-23. https://doi.org/10.1017/S0272263124000317

## 🤝 Research Use & Collaboration

- Research use welcome
- Compliance with data sharing protocols
- Ethics approval verification required

## 🛡️ Data Privacy

- All data processed locally (within browser)
- No external server data transmission
- Data not stored until explicitly downloaded by participants

## 📄 License

This project aims to improve reproducibility in academic research and is intended for research and educational use. For commercial use, please consult the original paper authors and implementation developers.

## 📝 Technical Implementation Details

### Vocabulary Data Structure
```javascript
// Example polysemous word
{
  type: 'polysemous', 
  word: 'chair', 
  knownMeaning: 'chair (furniture)', 
  targetMeaning: 'chairperson', 
  definition: 'a person in charge of a meeting or organization',
  category: 'polysemous'
}
```

### Test Design
- **Recognition Test**: 4 distractors + 1 correct answer + "I don't know" option
- **Recall Test**: Open-ended L2→L1 translation
- **Scoring**: Dichotomous (1 = learned, 0 = not learned)

---

**Implementation Date**: June 2, 2025  
**Version**: 1.0.0  
**Based on**: González-Fernández & Webb (2024)  
**Implementation Language**: HTML/JavaScript  
**Target Language Learners**: English learners with Japanese L1

# Contact
- Name: Ryuya KOMURO
- Email: ryuya.komuro.c4(at)tohoku.ac.jp
