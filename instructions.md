Legacy Global Foundation Website Development Guide
This guide outlines the aesthetic, content, and technical requirements for building the single-file, sophisticated website for the Legacy Global Foundation (LGF). The goal is to merge the high-contrast, professional design language of the external screenshot with the foundation's specific mission, content, and non-donation mandate.

1. Core Principles & Aesthetic Requirements
   The final output must be a single index.html file (containing all HTML, CSS/Tailwind, and JavaScript). The design must be sophisticated, high-contrast, rich, and welcoming.

LGF Color Palette
Role

Color Name

Hex Code

Purpose/Usage

Primary Accent

Vibrant Opportunity

#FF8800

Used for calls-to-action (CTAs), key headlines, iconography, and distinguishing elements. Represents the opportunity LGF provides.

Secondary Accent

Forward Focus

#4C2A70

Used for secondary actions, the "Forward Tools" pillar, and high-contrast section backgrounds (e.g., in the Partnership Model).

Background Base

Warm Earth

#FDFBF8

The main background color for light sections, providing a warm, off-white canvas.

Text Color

Rich Ground

#36332C

Primary color for all body text and general headings, offering high contrast against the Warm Earth background.

Header/Dark BG

Sophisticated Dark

#1A1A1A

Used for the sticky navigation bar, footer, and high-impact background sections to achieve a professional and sophisticated aesthetic.

Other Aesthetic Specifications
Element

Specification

Tailwind/CSS Implementation

Font

Poppins (must be loaded via CDN)

font-sans: ['Poppins', 'sans-serif']

Card Effects

Subtle hover lift and distinct accent borders for sophistication.

Apply a sophisticated-card class with transform: translateY(-5px) on hover and use dedicated ::before pseudo-elements to apply the colored accent border at the top of the card.

CRITICAL RULE

ABSOLUTELY NO donation links, donation requests, or references to asking for funds are permitted anywhere on the website.

N/A

2. Content Structure & Sections
   The site must be a single-page scrolling application with a fixed header and full responsiveness.

A. Header & Navigation (#header)
Aesthetic: Use the dark background (dark-bg).

Logo/Title: "🔗 LGF" (in primary orange).

Links: "Our Story" (#mission), "Pillars" (#pillars), "Partnership" (#partnership), "Contact Us" (#contact).

B. Hero Section (#hero)
Headline: "Reaching Forward. Giving Chances."

Subhead: "We are the bridge between immediate need and lasting opportunity..."

Aesthetic: Use a high-contrast dark overlay (opacity-70) over the background image to ensure text legibility (as per sophisticated design language).

C. Mission & Founding Partners (#mission)
Key Text: Must detail the "Legacy Gap" and include the founder quote.

Founding Commitment:

Ripple Beams Legacy: Drives the Basic Needs mission (Pillar 1 focus).

LineaBlu Lawyers: Drives legal and structural expertise (Pillar 2 focus).

D. Two Pillars Section (#pillars)
Pillar 1: Basic Needs (#basic-needs)
Focus: Direct Support for Immediate Needs.

List Items: Comprehensive Nutrition, Hygiene/Sanitation Kits, Fortified Staple Foods.

Pillar 2: Forward Tools (#forward-tools)
Focus: Structural Support through Legal Empowerment.

List Items: Pro Bono Legal Support, Compliance Guidance, Tailored Modules.

MUST contain the LLM Feature (see Section 3).

E. Partnership Model (#partnership)
Aesthetic: Use the dark background (dark-bg) for high contrast.

Headline: "Co-Invest in Outcomes."

Three-Step Process:

WE INVEST FIRST (Commitment of supplies, goods, or legal time).

YOU JOIN US (Invitation to match a portion in products/services).

DOUBLE THE IMPACT (Achieving greater reach and shared purpose).

F. Footer (#contact)
Aesthetic: Use the rich text color (rich-text) for the background.

Mandatory Phrase: Must include the note: "No solicitations for donations."

Contact Info: info@legacyglobalfoundation.com and phone number.

3. Technical Implementation: Forward Tools LLM
   The LLM feature must be fully integrated into the Forward Tools card (#forward-tools).

A. API and Logic
Model: gemini-2.5-flash-preview-05-20 (Text Generation).

Endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}

Authentication: const apiKey = ""; must be used.

Robustness: Implement fetchWithRetry function with exponential backoff.

B. LLM Persona (System Prompt)
The response persona must be a Foundational Legal Strategy Analyst from LineaBlu Lawyers:

const systemPrompt = "You are a Foundational Legal Strategy Analyst from LineaBlu Lawyers, focused on empowering African NGOs and creative enterprises. Based on the user's brief description, provide a compassionate, concise, actionable list of 3 strategic next steps and a list of 2-3 common required documents they should prepare. Format the response using markdown lists and bolding. Be encouraging.";

C. UI/UX Element IDs
The JavaScript must interact with the following IDs:

Input: textarea with id="forward-tools-input"

Button: button with id="generate-strategy-btn"

Loading: div (spinner) with id="llm-spinner"

Result: div with id="strategy-result"

Error: div with id="strategy-error"

D. Result Formatting
The raw markdown text from the LLM must be lightly processed to render correctly in the HTML div (e.g., replace \n with <br> and \*\* with <strong>).
