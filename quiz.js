// Enable debug mode for detailed logging
const DEBUG_MODE = true

// Log debug messages
function debugLog(message) {
  if (DEBUG_MODE) {
    console.log(`[DEBUG] ${message}`)
  }
}

// Initialize questions with error handling
let questions = []
let currentResultQuestion = 0 // State for current question in results

try {
  debugLog("Attempting to parse questions_json")
  // THIS IS THE LINE YOU CAN REPLACE WITH ANY CHAPTER'S QUESTIONS
  questions = [
    {
      text: "Match the gas to its respective cylinder body and shoulder colors. Column A (Gas) Column B (Body Color) Column C (Shoulder Color) 1. Oxygen a) Black i) White 2. N2O b) Blue ii) Blue 3. Nitrogen c) Black iii) Black 4. Carbon dioxide d) Gray iv) Gray 5. Entonox e) Blue v) White &amp;amp; blue 6. Air f) Grey vi) Black &amp;amp; white",
      options: [
        { label: "A", text: "1-a-i ; 2-b-ii ; 3-c-iii; 4-d-iv ; 5-e-v ; 6-f-vi", correct: true },
        { label: "B", text: "1-a-vi ; 2-b-ii ; 3-c-iii; 4-d-iv ; 5-d-v ; 6-f-i", correct: false },
        { label: "C", text: "1-a-i ; 2-b-v ; 3-c-iii; 4-d-iv ; 5-d-ii ; 6-f-vi", correct: false },
        { label: "D", text: "1-a-i ; 2-b-ii ; 3-d-iv; 4-c-iii ; 5-d-v ; 6-f-vi", correct: false },
      ],
      correct_answer: "A. 1-a-i ; 2-b-ii ; 3-c-iii; 4-d-iv ; 5-e-v ; 6-f-vi",
      question_images: [],
      explanation_images: [],
      explanation:
        '<table cellspacing="0" style="border-collapse:collapse; width:552px">\n<tbody>\n<tr>\n<td rowspan="2" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p style="text-align:center"> </p>\n<p style="text-align:center"><strong>Gas</strong></p>\n</td>\n<td colspan="2" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p style="text-align:center"><strong>Cylinder color</strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p style="text-align:center"><strong>Body</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p style="text-align:center"><strong>Shoulder</strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Air</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Grey</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Black &amp; white</p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Oxygen</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Black</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>White</p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>N2O</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Blue</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Blue</p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Nitrogen</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Black</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Black</p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Carbon dioxide</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Grey</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Grey</p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Entonox</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Blue</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>White &amp; blue </p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Helium</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Brown</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Brown</p>\n</td>\n</tr>\n</tbody>\n\n\n<p style=\'font-size: 10px; color: #808080; font-style: italic;\'>@dams_new_robot</p>',
      bot: "@dams_new_robot",
      audio: "https://image.prepladder.com/content/PndBcRhfXrapYZlBx4QC1737884809.mp3",
      video: "",
    },
    {
      text: "You notice the following vaporizer being used in OT. What is the likely anesthetic agent that could be used here?",
      options: [
        { label: "A", text: "Desflurane", correct: true },
        { label: "B", text: "Isoflurane", correct: false },
        { label: "C", text: "Sevoflurane", correct: false },
        { label: "D", text: "Halothane", correct: false },
      ],
      correct_answer: "A. Desflurane",
      question_images: ["https://image.prepladder.com/content/3QlgAUTsUndiw5rQaUXq1735034218.png"],
      explanation_images: [
        "https://image.prepladder.com/content/SY02njbU3vpXt86Uu8Of1735034282.png",
        "https://image.prepladder.com/content/9HAVO14NbG4xWZaPvVmM1734774925.png",
      ],
      explanation:
        '<table cellspacing="0" style="border-collapse:collapse; width:625px">\n<tbody>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Description</strong></p>\n</td>\n<td colspan="2" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>The most commonly used type is <strong>variable <span class="customMeta" data-dictid="4fc6b3ee501692777183061d4f55ff">bypass</span> vaporizers</strong> (except for Desflurane).</li>\n<li>Made up of copper.</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Principle</strong></p>\n</td>\n<td colspan="2" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>Based on the <span class="customMeta" data-dictid="19a5a39c6b169277720158b14e5cf1">vapor</span> pressure of the inhaled <span class="customMeta" data-dictid="4b83ec31581692777181547f1a89ef">anesthetic</span> agent</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td rowspan="4" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Color coding</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Desflurane</strong></li>\n</ul>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Blue </strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Isoflurane</strong></li>\n</ul>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Purple </strong><strong>(Option B)</strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Sevoflurane</strong></li>\n</ul>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Yellow </strong><strong>(Option C)</strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Halothane</strong></li>\n</ul>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Red </strong><strong>(Option D)</strong></p>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Modification</strong></p>\n</td>\n<td colspan="2" style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Tec-6 <span class="customMeta" data-dictid="4fa5d60f481692777201f36552b1bc">vaporizer</span> is used for Desflurane</strong> <strong>(Option A)</strong> (<strong>Reason: low boiling point of Desflurane)</strong></li>\n</ul>\n</td>\n</tr>\n</tbody>\n\n\n<p style=\'font-size: 10px; color: #808080; font-style: italic;\'>@dams_new_robot</p>',
      bot: "@dams_new_robot",
      audio: "https://image.prepladder.com/content/2BugGfSy8DBmQB2zwpml1737995206.mp3",
      video: "",
    },
    {
      text: "How is a circle system made into a fully closed system?",
      options: [
        { label: "A", text: "APL valve is opened", correct: false },
        { label: "B", text: "APL valve is closed", correct: false },
        {
          label: "C",
          text: "APL valve is closed and the fresh gas flow is set equal to the uptake by the patient",
          correct: true,
        },
        { label: "D", text: "None of the above", correct: false },
      ],
      correct_answer: "C. APL valve is closed and the fresh gas flow is set equal to the uptake by the patient",
      question_images: [],
      explanation_images: ["https://image.prepladder.com/content/PE5auBSFLopcuAokEucD1734775624.png"],
      explanation:
        '<table cellspacing="0" style="border-collapse:collapse; width:624px">\n<tbody>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Components</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>Fresh gas inlet</li>\n<li>Reservoir bag</li>\n<li>Two one-way valves (inspiratory and <span class="customMeta" data-dictid="632c0c215816927771878b6e818a11">expiratory</span> limbs)</li>\n<li>Y-piece <span class="customMeta" data-dictid="f1e77365501692777185cee4cf4c75">connector</span> to the patient</li>\n<li>APL valve</li>\n<li>Soda <span class="customMeta" data-dictid="c59d8f1bae1692777191d7665ba18f">lime</span> canister for CO2 absorption</li>\n<li>Kink-resistant corrugated tubing connecting components and patient</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Fully closed system</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>To make the circle system a fully closed system - the APL <span class="customMeta" data-dictid="416dd1004a169277720177d9a6adc5">valve</span> is closed and the fresh gas flow is set equal to the <span class="customMeta" data-dictid="cc20d2d7111692777201fb0caeb3f2">uptake</span> by the patient so that the overall volume of gas in the system is constant. </strong></li>\n</ul>\n<ul>\n<li>It is difficult to estimate the patient\'s oxygen <span class="customMeta" data-dictid="cc20d2d7111692777201fb0caeb3f2">uptake</span> accurately and therefore fully closed systems are rarely used in practice.</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p>Advantages</p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>Conserves <span class="customMeta" data-dictid="4b83ec31581692777181547f1a89ef">anesthetic</span> gases, heat, and moisture.</li>\n<li>Allows low-flow <span class="customMeta" data-dictid="e24b7bd55d16927771818aaa6ad0ed">anesthesia</span> with monitoring.</li>\n<li>Low dead space; Y-piece tubing creates mechanical dead space comparable to non-rebreathing circuits.</li>\n<li>Soda <span class="customMeta" data-dictid="c59d8f1bae1692777191d7665ba18f">lime</span> canister is distant from the patient\'s airway, reducing the <span class="customMeta" data-dictid="0b1500fcd816927771900b59d16bde">inhalation</span> risk of <span class="customMeta" data-dictid="91ce1734d7169277719861b8b87f9f">soda</span> <span class="customMeta" data-dictid="c59d8f1bae1692777191d7665ba18f">lime</span> dust.</li>\n<li>Reduces atmospheric pollution by recycling <span class="customMeta" data-dictid="4b83ec31581692777181547f1a89ef">anesthetic</span> gases.</li>\n</ul>\n</td>\n</tr>\n</tbody>\n\n\n<p style=\'font-size: 10px; color: #808080; font-style: italic;\'>@dams_new_robot</p>',
      bot: "@dams_new_robot",
      audio: "https://image.prepladder.com/content/Z6ozV9c6v565TyK8Zh791737997618.mp3",
      video: "",
    },
    {
      text: "A 40 year male was undergoing laparoscopic cholecystectomy, in the middle of surgery, he developed tachypnoea with increased sweating, HR - 120 bpm, spO2 - 92%. Anesthetist observed the change and promptly responded by adding a CO2 absorber substance as shown in the image below, following which the signs and symptoms reverted back to normal limits. Which among the following inhalational agents is completely safe to be administered with the added substance?",
      options: [
        { label: "A", text: "Desflurane", correct: false },
        { label: "B", text: "Halothane", correct: true },
        { label: "C", text: "Sevoflurane", correct: false },
        { label: "D", text: "Trilene", correct: false },
      ],
      correct_answer: "B. Halothane",
      question_images: ["https://image.prepladder.com/content/CyVqOvT9qYCuQtGz1BaM1734775662.png"],
      explanation_images: [
        "https://image.prepladder.com/content/iS0iaXTk8dPOS873kjlV1734775704.png",
        "https://image.prepladder.com/content/PgwNZKQolXZ0ED0xvzLt1734775740.png",
      ],
      explanation:
        '<table cellspacing="0" style="border-collapse:collapse; width:624px">\n<tbody>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Composition</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>80% Ca(OH)2 </strong></li>\n<li>3% NaOH</li>\n<li>2% KOH</li>\n<li>16% H2O</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Absorptive capacity</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>20-26 L</strong> of CO2/100g/min</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Indicator</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li><strong>Ethyl <span class="customMeta" data-dictid="3f54b73e011692777202c95e6aea2e">violet</span> </strong>(changes color upon exhaustion)</li>\n</ul>\n<p style="text-align:center"><img alt="" data-author="" data-hash="" data-license="" data-source="" data-tags="" height="1000" src="https://image.prepladder.com/content/PgwNZKQolXZ0ED0xvzLt1734775740.png" width="1000"/></p>\n<br/>\n<br/>\t\t\t </td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Exhaustion</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>Indicated by change of color</li>\n<li>Results in rebreathing of CO2 (tachypnoea, tachycardia, hypoxia)</li>\n</ul>\n</td>\n</tr>\n<tr>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<p><strong>Interactions</strong></p>\n</td>\n<td style="border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:top">\n<ul>\n<li>Soda <span class="customMeta" data-dictid="c59d8f1bae1692777191d7665ba18f">Lime</span> + <strong>Trilene</strong> ⇾ <span class="customMeta" data-dictid="192822a62a1692777195fa2aa8568f">Phosgene</span> (cause ARDS) + <strong>Dichloroacetylene (neurotoxic)</strong></li>\n<li><strong>Soda <span class="customMeta" data-dictid="c59d8f1bae1692777191d7665ba18f">Lime</span> + <span class="customMeta" data-dictid="a87066d49e169277719815bfbbc270">Sevoflurane</span> ⇾ COMPOUND - A (nephrotoxic)</strong></li>\n<li>Minor interaction: with Desflurane, <span class="customMeta" data-dictid="825de901c81692777187ec3572018e">Enflurane</span> and Isoflurane, produces carbon monoxide<strong> (more with Baralyme)</strong></li>\n</ul>\n</td>\n</tr>\n</tbody>\n\n\n<p style=\'font-size: 10px; color: #808080; font-style: italic;\'>@dams_new_robot</p>',
      bot: "@dams_new_robot",
      audio: "https://image.prepladder.com/content/Dnjq0xEuQV1ig7ekftIZ1740045135.mp3",
      video: "",
    },
  ]

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("Questions data is empty or invalid")
  }
  debugLog(`Successfully parsed ${questions.length} questions`)
} catch (e) {
  console.error("Failed to parse questions_json:", e)
  document.getElementById("error-message").innerHTML =
    "Error loading quiz data. Please check the console for details or contact support."
  document.getElementById("error-message").classList.remove("hidden")
  document.getElementById("start-test").disabled = true
  // Fallback to sample questions for testing
  questions = [
    {
      text: "What is 2 + 2?",
      options: [
        { label: "A", text: "3", correct: false },
        { label: "B", text: "4", correct: true },
        { label: "C", text: "5", correct: false },
        { label: "D", text: "6", correct: false },
      ],
      correct_answer: "B. 4",
      question_images: [],
      explanation_images: [],
      explanation: "<p>2 + 2 = 4</p><p>@dams_new_robot</p>",
      bot: "@dams_new_robot",
      audio: "",
      video: "",
    },
  ]
  debugLog("Loaded fallback questions")
}

// Quiz state
let currentQuestion = 0
let answers = new Array(questions.length).fill(null)
let markedForReview = new Array(questions.length).fill(false)
let timeRemaining = 14 * 60 // Duration in seconds
let timerInterval = null
const quizId = `anaesthesia_machine` // Unique ID for local storage

// Declare confetti and Hls variables
const confetti = window.confetti
const Hls = window.Hls

// Load saved progress
function loadProgress() {
  try {
    debugLog("Loading progress from localStorage")
    const saved = localStorage.getItem(`quiz_${quizId}`)
    if (saved) {
      const { savedAnswers, savedMarked, savedTime } = JSON.parse(saved)
      answers = savedAnswers || answers
      markedForReview = savedMarked || markedForReview
      timeRemaining = savedTime !== undefined ? savedTime : timeRemaining
      debugLog("Progress loaded successfully")
    } else {
      debugLog("No saved progress found")
    }
  } catch (e) {
    console.error("Error loading progress:", e)
    debugLog("Failed to load progress: " + e.message)
  }
}

// Save progress
function saveProgress() {
  try {
    debugLog("Saving progress to localStorage")
    localStorage.setItem(
      `quiz_${quizId}`,
      JSON.stringify({
        savedAnswers: answers,
        savedMarked: markedForReview,
        savedTime: timeRemaining,
      }),
    )
    debugLog("Progress saved successfully")
  } catch (e) {
    console.error("Error saving progress:", e)
    debugLog("Failed to save progress: " + e.message)
  }
}

// Initialize quiz
function initQuiz() {
  try {
    debugLog("Initializing quiz")
    loadProgress()
    const startButton = document.getElementById("start-test")
    if (!startButton) {
      throw new Error("Start test button not found")
    }
    startButton.addEventListener("click", startQuiz)
    debugLog("Start test button listener attached")

    document.getElementById("previous-btn").addEventListener("click", showPreviousQuestion)
    document.getElementById("next-btn").addEventListener("click", showNextQuestion)
    document.getElementById("mark-review").addEventListener("click", toggleMarkForReview)
    document.getElementById("nav-toggle").addEventListener("click", toggleNavPanel)
    document.getElementById("submit-test").addEventListener("click", showSubmitModal)
    document.getElementById("continue-test").addEventListener("click", closeExitModal)
    document.getElementById("exit-test").addEventListener("click", () => {
      debugLog("Exiting test")
      localStorage.removeItem(`quiz_${quizId}`)
      window.location.reload()
    })
    document.getElementById("cancel-submit").addEventListener("click", closeSubmitModal)
    document.getElementById("confirm-submit").addEventListener("click", submitTest)
    document.getElementById("take-again").addEventListener("click", () => {
      debugLog("Restarting test")
      localStorage.removeItem(`quiz_${quizId}`)
      window.location.reload()
    })
    document.getElementById("close-nav").addEventListener("click", toggleNavPanel)
    document.getElementById("nav-filter").addEventListener("change", updateNavPanel)
    document.getElementById("prev-result").addEventListener("click", showPreviousResult)
    document.getElementById("next-result").addEventListener("click", showNextResult)
    document.getElementById("results-nav-toggle").addEventListener("click", toggleResultsNavPanel)
    document.getElementById("close-results-nav").addEventListener("click", toggleResultsNavPanel)
    document.getElementById("results-nav-filter").addEventListener("change", updateResultsNavPanel)

    debugLog("Quiz initialized successfully")
  } catch (e) {
    console.error("Failed to initialize quiz:", e)
    debugLog("Failed to initialize quiz: " + e.message)
    document.getElementById("error-message").innerHTML =
      "Error initializing quiz. Please check the console for details or contact support."
    document.getElementById("error-message").classList.remove("hidden")
    document.getElementById("start-test").disabled = true
  }
}

// Start quiz
function startQuiz() {
  try {
    debugLog("Starting quiz")
    document.getElementById("instructions").classList.add("hidden")
    document.getElementById("quiz").classList.remove("hidden")
    showQuestion(currentQuestion)
    startTimer()
    updateNavPanel()
    debugLog("Quiz started successfully")
  } catch (e) {
    console.error("Error starting quiz:", e)
    debugLog("Failed to start quiz: " + e.message)
    document.getElementById("error-message").innerHTML =
      "Error starting quiz. Please check the console for details or contact support."
    document.getElementById("error-message").classList.remove("hidden")
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("instructions").classList.remove("hidden")
  }
}

// Show question
function showQuestion(index) {
  try {
    debugLog(`Showing question ${index + 1}`)
    currentQuestion = index
    const q = questions[index]
    if (!q) { 
      throw new Error(`Question ${index} is undefined`)
    }

    document.getElementById("question-number").innerHTML = `Question <span>${index + 1}</span> of ${questions.length}`
    document.getElementById("question-text").innerHTML = q.text || "No question text available"

    const imagesDiv = document.getElementById("question-images")
    imagesDiv.innerHTML =
      q.question_images && q.question_images.length > 0
        ? q.question_images
            .map((url) => `<img src="${url}" alt="Question Image" class="max-w-full h-auto rounded-lg">`)
            .join("")
        : ""

    const optionsDiv = document.getElementById("options")
    optionsDiv.innerHTML =
      q.options && q.options.length > 0
        ? q.options
            .map(
              (opt) => `
                <button class="option-btn w-full text-left p-3 border rounded-lg ${answers[index] === opt.label ? "selected" : ""}"
                         onclick="selectOption(${index}, '${opt.label}')"
                         aria-label="Option ${opt.label}: ${opt.text}">
                    ${opt.label}. ${opt.text}
                </button>
            `,
            )
            .join("")
        : '<p class="text-red-500">No options available</p>'

    document.getElementById("previous-btn").disabled = index === 0
    document.getElementById("next-btn").disabled = index === questions.length - 1
    document.getElementById("mark-review").classList.toggle("marked", markedForReview[index])

    updateProgressBar()
    saveProgress()
    window.scrollTo({ top: 0, behavior: "smooth" })
    debugLog(`Question ${index + 1} displayed successfully`)
  } catch (e) {
    console.error("Error displaying question:", e)
    debugLog("Failed to display question: " + e.message)
  }
}

// Select option
function selectOption(index, label) {
  try {
    debugLog(`Selecting option ${label} for question ${index + 1}`)
    answers[index] = label
    const optionsDiv = document.getElementById("options")
    const optionButtons = optionsDiv.querySelectorAll(".option-btn")
    optionButtons.forEach((btn) => {
      const btnLabel = btn.textContent.trim().split(".")[0]
      btn.classList.toggle("selected", btnLabel === label)
    })
    updateNavPanel()
    saveProgress()
    debugLog(`Option ${label} selected for question ${index + 1}`)
  } catch (e) {
    console.error("Error selecting option:", e)
    debugLog("Failed to select option: " + e.message)
  }
}

// Toggle mark for review
function toggleMarkForReview() {
  try {
    debugLog(`Toggling mark for review on question ${currentQuestion + 1}`)
    markedForReview[currentQuestion] = !markedForReview[currentQuestion]
    document.getElementById("mark-review").classList.toggle("marked", markedForReview[currentQuestion])
    updateNavPanel()
    saveProgress()
    debugLog(`Mark for review toggled for question ${currentQuestion + 1}`)
  } catch (e) {
    console.error("Error marking for review:", e)
    debugLog("Failed to mark for review: " + e.message)
  }
}

// Navigate to previous question
function showPreviousQuestion() {
  try {
    debugLog(`Navigating to previous question from ${currentQuestion + 1}`)
    if (currentQuestion > 0) {
      currentQuestion--
      showQuestion(currentQuestion)
    }
  } catch (e) {
    console.error("Error navigating to previous question:", e)
    debugLog("Failed to navigate to previous question: " + e.message)
  }
}

// Navigate to next question
function showNextQuestion() {
  try {
    debugLog(`Navigating to next question from ${currentQuestion + 1}`)
    if (currentQuestion < questions.length - 1) {
      currentQuestion++
      showQuestion(currentQuestion)
    }
  } catch (e) {
    console.error("Error navigating to next question:", e)
    debugLog("Failed to navigate to next question: " + e.message)
  }
}

// Handle question navigation click
function handleQuestionNavClick(index) {
  try {
    debugLog(`Navigating to question ${index + 1} via nav panel`)
    showQuestion(index)
    toggleNavPanel()
  } catch (e) {
    console.error("Error handling navigation click:", e)
    debugLog("Failed to navigate via nav panel: " + e.message)
  }
}

// Start timer
function startTimer() {
  try {
    debugLog("Starting timer")
    timerInterval = setInterval(() => {
      if (timeRemaining <= 0) {
        debugLog("Timer expired, submitting test")
        clearInterval(timerInterval)
        submitTest()
      } else {
        timeRemaining--
        const minutes = Math.floor(timeRemaining / 60)
        const seconds = timeRemaining % 60
        document.getElementById("timer").innerHTML =
          `Time Remaining: <span>${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}</span>`
        saveProgress()
      }
    }, 1000)
    debugLog("Timer started successfully")
  } catch (e) {
    console.error("Error starting timer:", e)
    debugLog("Failed to start timer: " + e.message)
  }
}

// Update progress bar
function updateProgressBar() {
  try {
    debugLog("Updating progress bar")
    const progress = ((currentQuestion + 1) / questions.length) * 100
    document.getElementById("progress-bar").style.width = `${progress}%`
    debugLog("Progress bar updated")
  } catch (e) {
    console.error("Error updating progress bar:", e)
    debugLog("Failed to update progress bar: " + e.message)
  }
}

// Update quiz navigation panel
function updateNavPanel() {
  try {
    debugLog("Updating quiz navigation panel")
    const filter = document.getElementById("nav-filter").value
    const navGrid = document.getElementById("nav-grid")
    navGrid.innerHTML = questions
      .map((_, i) => {
        if (filter === "answered" && !answers[i]) return ""
        if (filter === "unanswered" && answers[i]) return ""
        if (filter === "marked" && !markedForReview[i]) return ""
        return `
                <button class="question-nav-btn ${answers[i] ? "answered" : "unanswered"} ${markedForReview[i] ? "marked-nav" : ""}"
                        onclick="handleQuestionNavClick(${i})"
                        aria-label="Go to Question ${i + 1}">
                    ${i + 1}
                </button>
            `
      })
      .join("")
    debugLog("Quiz navigation panel updated")
  } catch (e) {
    console.error("Error updating quiz navigation panel:", e)
    debugLog("Failed to update quiz navigation panel: " + e.message)
  }
}

// Update results navigation panel
function updateResultsNavPanel() {
  try {
    debugLog("Updating results navigation panel")
    const filter = document.getElementById("results-nav-filter").value
    const navGrid = document.getElementById("results-nav-grid")
    navGrid.innerHTML = questions
      .map((_, i) => {
        if (filter === "answered" && !answers[i]) return ""
        if (filter === "unanswered" && answers[i]) return ""
        if (filter === "marked" && !markedForReview[i]) return ""
        return `
                <button class="result-nav-btn-grid ${answers[i] ? "answered" : "unanswered"} ${markedForReview[i] ? "marked-nav" : ""}"
                        onclick="handleResultNavClick(${i})"
                        aria-label="Go to Result for Question ${i + 1}">
                    ${i + 1}
                </button>
            `
      })
      .join("")
    debugLog("Results navigation panel updated")
  } catch (e) {
    console.error("Error updating results navigation panel:", e)
    debugLog("Failed to update results navigation panel: " + e.message)
  }
}

// Toggle quiz navigation panel
function toggleNavPanel() {
  try {
    debugLog("Toggling quiz navigation panel")
    const navPanel = document.getElementById("nav-panel")
    navPanel.classList.toggle("hidden")
    debugLog("Quiz navigation panel toggled")
  } catch (e) {
    console.error("Error toggling quiz navigation panel:", e)
    debugLog("Failed to toggle quiz navigation panel: " + e.message)
  }
}

// Toggle results navigation panel
function toggleResultsNavPanel() {
  try {
    debugLog("Toggling results navigation panel")
    const resultsNavPanel = document.getElementById("results-nav-panel")
    resultsNavPanel.classList.toggle("hidden")
    if (!resultsNavPanel.classList.contains("hidden")) {
      updateResultsNavPanel()
    }
    debugLog("Results navigation panel toggled")
  } catch (e) {
    console.error("Error toggling results navigation panel:", e)
    debugLog("Failed to toggle results navigation panel: " + e.message)
  }
}

// Handle result navigation click
function handleResultNavClick(index) {
  try {
    debugLog(`Navigating to result for question ${index + 1} via nav panel`)
    showResults(index)
    toggleResultsNavPanel()
  } catch (e) {
    console.error("Error handling result navigation click:", e)
    debugLog("Failed to navigate to result: " + e.message)
  }
}

// Show submit modal
function showSubmitModal() {
  try {
    debugLog("Showing submit modal")
    const attempted = answers.filter((a) => a !== null).length
    document.getElementById("attempted-count").textContent = attempted
    document.getElementById("unattempted-count").textContent = questions.length - attempted
    document.getElementById("submit-modal").classList.remove("hidden")
    debugLog("Submit modal displayed")
  } catch (e) {
    console.error("Error showing submit modal:", e)
    debugLog("Failed to show submit modal: " + e.message)
  }
}

// Close submit modal
function closeSubmitModal() {
  try {
    debugLog("Closing submit modal")
    document.getElementById("submit-modal").classList.add("hidden")
    debugLog("Submit modal closed")
  } catch (e) {
    console.error("Error closing submit modal:", e)
    debugLog("Failed to close submit modal: " + e.message)
  }
}

// Close exit modal
function closeExitModal() {
  try {
    debugLog("Closing exit modal")
    document.getElementById("exit-modal").classList.add("hidden")
    debugLog("Exit modal closed")
  } catch (e) {
    console.error("Error closing exit modal:", e)
    debugLog("Failed to close exit modal: " + e.message)
  }
}

// Submit test
function submitTest() {
  try {
    debugLog("Submitting test")
    clearInterval(timerInterval)
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("submit-modal").classList.add("hidden")
    document.getElementById("results").classList.remove("hidden")
    showResults(0) // Start with first question

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    localStorage.removeItem(`quiz_${quizId}`)
    debugLog("Test submitted successfully")
  } catch (e) {
    console.error("Error submitting test:", e)
    debugLog("Failed to submit test: " + e.message)
  }
}

// Show result for a single question
function showResults(index) {
  try {
    debugLog(`Showing result for question ${index + 1}`)
    currentResultQuestion = index
    let correct = 0,
      wrong = 0,
      unanswered = 0,
      marked = 0

    answers.forEach((answer, i) => {
      const isCorrect = answer && questions[i].options.find((opt) => opt.label === answer)?.correct
      if (answer === null) unanswered++
      else if (isCorrect) correct++
      else wrong++
      if (markedForReview[i]) marked++
    })

    const q = questions[index]
    if (!q) {
      throw new Error(`Question ${index} is undefined`)
    }

    const userAnswer = answers[index]
    const isCorrect = userAnswer && q.options.find((opt) => opt.label === userAnswer)?.correct

    const resultsContent = document.getElementById("results-content")
    resultsContent.innerHTML = `
            <div class="border-4 ${isCorrect ? "border-green-600 bg-green-100" : userAnswer ? "border-red-600 bg-red-100" : "border-gray-400 bg-gray-50"} p-4 rounded-lg">
                <p class="font-semibold">Question ${index + 1}: ${q.text || "No question text"}</p>
                ${q.question_images && q.question_images.length > 0 ? q.question_images.map((url) => `<img src="${url}" alt="Question Image" class="max-w-full h-auto rounded-lg my-2">`).join("") : ""}
                <p><strong>Your Answer:</strong> ${userAnswer ? `${userAnswer}. ${q.options.find((opt) => opt.label === userAnswer)?.text || "Invalid option"}` : "Unanswered"}</p>
                <p><strong>Correct Answer:</strong> ${q.correct_answer || "Unknown"}</p>
                <div class="mt-2">${q.explanation || "No explanation available"}</div>
                ${q.explanation_images && q.explanation_images.length > 0 ? q.explanation_images.map((url) => `<img src="${url}" alt="Explanation Image" class="max-w-full h-auto rounded-lg my-2">`).join("") : ""}
                ${
                  q.video
                    ? `
                    <button class="play-video bg-[#2c5281] text-white px-4 py-2 rounded-lg mt-2"
                             onclick="loadVideo(this, '${q.video}', 'video-${index}')"
                            aria-label="Play explanation video for Question ${index + 1}">
                        Play Video Explanation
                    </button>
                    <div id="video-${index}" class="video-container mt-2"></div>
                `
                    : '<p class="text-gray-500 mt-2">No video available</p>'
                }
                ${
                  q.audio
                    ? `
                    <button class="play-audio bg-[#2c5281] text-white px-4 py-2 rounded-lg mt-2"
                             onclick="loadAudio(this, '${q.audio}', 'audio-${index}')"
                            aria-label="Play audio explanation for Question ${index + 1}">
                        Play Audio Explanation
                    </button>
                    <div id="audio-${index}" class="audio-container mt-2"></div>
                `
                    : ""
                }
            </div>
        `

    document.getElementById("correct-count").textContent = correct
    document.getElementById("wrong-count").textContent = wrong
    document.getElementById("unanswered-count").textContent = unanswered
    document.getElementById("marked-count").textContent = marked
    document.getElementById("result-question-number").innerHTML =
      `Question <span>${index + 1}</span> of ${questions.length}`

    document.getElementById("prev-result").disabled = index === 0
    document.getElementById("next-result").disabled = index === questions.length - 1

    updateResultsNavPanel()
    window.scrollTo({ top: 0, behavior: "smooth" })
    debugLog(`Result for question ${index + 1} displayed successfully`)
  } catch (e) {
    console.error("Error displaying result:", e)
    debugLog("Failed to display result: " + e.message)
  }
}

// Navigate to previous result
function showPreviousResult() {
  try {
    debugLog(`Navigating to previous result from question ${currentResultQuestion + 1}`)
    if (currentResultQuestion > 0) {
      showResults(currentResultQuestion - 1)
    }
  } catch (e) {
    console.error("Error navigating to previous result:", e)
    debugLog("Failed to navigate to previous result: " + e.message)
  }
}

// Navigate to next result
function showNextResult() {
  try {
    debugLog(`Navigating to next result from question ${currentResultQuestion + 1}`)
    if (currentResultQuestion < questions.length - 1) {
      showResults(currentResultQuestion + 1)
    }
  } catch (e) {
    console.error("Error navigating to next result:", e)
    debugLog("Failed to navigate to next result: " + e.message)
  }
}

// Lazy-load video
function loadVideo(button, videoUrl, containerId) {
  try {
    debugLog(`Loading video for ${containerId}: ${videoUrl}`)
    if (!videoUrl) {
      const container = document.getElementById(containerId)
      container.innerHTML = `<p class="text-gray-500">No video available</p>`
      button.remove()
      debugLog("No video URL provided")
      return
    }

    const container = document.getElementById(containerId)
    container.innerHTML = `
            <div class="video-loading"></div>
            <video controls class="w-full max-w-[600px] rounded-lg" preload="metadata" aria-label="Video explanation">
                <source src="${videoUrl}" type="${videoUrl.endsWith(".m3u8") ? "application/x-mpegURL" : "video/mp4"}">
                Your browser does not support the video tag.
            </video>
        `
    container.classList.add("active")
    button.remove()

    // Initialize HLS.js for .m3u8 videos
    const video = container.querySelector("video")
    if (videoUrl.endsWith(".m3u8") && Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS.js error:", data)
        container.innerHTML = `<p class="text-red-500">Error loading video. <a href="${videoUrl}" target="_blank" aria-label="Open video in new tab">Open video</a></p>`
        debugLog("HLS.js error: " + JSON.stringify(data))
      })
    } else if (videoUrl.endsWith(".m3u8") && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl
    }

    // Handle video load errors
    video.onerror = () => {
      console.error("Video load error for URL:", videoUrl)
      container.innerHTML = `<p class="text-red-500">Error loading video. <a href="${videoUrl}" target="_blank" aria-label="Open video in new tab">Open video</a></p>`
      debugLog("Video load error for URL: " + videoUrl)
    }

    // Remove loading spinner when video is ready
    video.onloadedmetadata = () => {
      container.querySelector(".video-loading").remove()
      debugLog("Video loaded successfully")
    }
  } catch (e) {
    console.error("Error loading video:", e)
    debugLog("Failed to load video: " + e.message)
    const container = document.getElementById(containerId)
    container.innerHTML = `<p class="text-red-500">Error loading video. <a href="${videoUrl}" target="_blank" aria-label="Open video in new tab">Open video</a></p>`
  }
}

// Lazy-load audio
function loadAudio(button, audioUrl, containerId) {
  try {
    debugLog(`Loading audio for ${containerId}: ${audioUrl}`)
    if (!audioUrl) {
      const container = document.getElementById(containerId)
      container.innerHTML = `<p class="text-gray-500">No audio available</p>`
      button.remove()
      debugLog("No audio URL provided")
      return
    }

    const container = document.getElementById(containerId)
    container.innerHTML = `
            <audio controls class="w-full max-w-[600px]" preload="metadata" aria-label="Audio explanation">
                <source src="${audioUrl}" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
        `
    container.classList.add("active")
    button.remove()

    // Handle audio load errors
    const audio = container.querySelector("audio")
    audio.onerror = () => {
      console.error("Audio load error for URL:", audioUrl)
      container.innerHTML = `<p class="text-red-500">Error loading audio. <a href="${audioUrl}" target="_blank" aria-label="Open audio in new tab">Open audio</a></p>`
      debugLog("Audio load error for URL: " + audioUrl)
    }

    debugLog("Audio loaded successfully")
  } catch (e) {
    console.error("Error loading audio:", e)
    debugLog("Failed to load audio: " + e.message)
    const container = document.getElementById(containerId)
    container.innerHTML = `<p class="text-red-500">Error loading audio. <a href="${audioUrl}" target="_blank" aria-label="Open audio in new tab">Open audio</a></p>`
  }
}

// Toggle dark mode
function toggleTheme() {
  try {
    debugLog("Toggling theme")
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light")
    debugLog("Theme toggled successfully")
  } catch (e) {
    console.error("Error toggling theme:", e)
    debugLog("Failed to toggle theme: " + e.message)
  }
}

// Load theme preference
function loadTheme() {
  try {
    debugLog("Loading theme preference")
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    debugLog("Theme loaded successfully")
  } catch (e) {
    console.error("Error loading theme:", e)
    debugLog("Failed to load theme: " + e.message)
  }
}

// Initialize on DOM content loaded
window.addEventListener("DOMContentLoaded", () => {
  try {
    debugLog("DOM content loaded, initializing quiz")
    loadTheme()
    initQuiz()
  } catch (e) {
    console.error("Error during DOMContentLoaded:", e)
    debugLog("Failed to initialize on DOMContentLoaded: " + e.message)
    document.getElementById("error-message").innerHTML =
      "Error initializing quiz. Please check the console for details or contact support."
    document.getElementById("error-message").classList.remove("hidden")
  }
})
