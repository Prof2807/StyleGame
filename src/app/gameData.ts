export const LEVELS = [
  {
    id: 1,
    label: "Brutalist Age",
    styles: "bg-stone-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-black min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-4 border-black bg-stone-100 shadow-[4px_4px_0px_black] mb-6",
    btnStyle: "bg-stone-100 border-2 border-black px-4 py-2 hover:bg-white active:translate-x-1 active:translate-y-1 m-2 inline-block transition-none",
    questions: [
      { text: "Original JS name?", options: ["Mocha", "LiveScript", "ECMAScript", "JavaLight"], correct: "Mocha" },
      { text: "What did <b> tag do?", options: ["Big", "Bold", "Blue", "Blink"], correct: "Bold" },
      { text: "Hyperlink tag?", options: ["<link>", "<href>", "<a>", "<url>"], correct: "<a>" }
    ]
  },
  {
    id: 2,
    label: "Windows 95",
    styles: "bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 p-4 text-black min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-none border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 bg-[#c0c0c0] mb-6",
    btnStyle: "bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 px-6 py-1 m-1 inline-block active:border-t-gray-800 active:border-l-gray-800 active:border-white",
    questions: [
      { text: "90s king of image formats?", options: ["PNG", "GIF", "WebP", "TIFF"], correct: "GIF" },
      { text: "Internet noise sound?", options: ["Beep-boop", "Dial-up Screech", "Silence", "Birds"], correct: "Dial-up Screech" },
      { text: "Where did files live?", options: ["Cloud", "Floppy Disk", "SSD", "Flash Drive"], correct: "Floppy Disk" }
    ]
  },
  {
    id: 3,
    label: "Web 2.0",
    styles: "bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl border border-blue-400 p-8 shadow-lg text-blue-900 min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-2 border-blue-400 bg-white/80 shadow-blue-200 shadow-md mb-6 text-blue-600",
    btnStyle: "bg-gradient-to-t from-blue-600 to-blue-400 text-white rounded-md px-5 py-2 m-2 inline-block shadow-inner border border-blue-700",
    questions: [
      { text: "Heart of Web 2.0 tech?", options: ["JSON", "AJAX", "Java", "Flash"], correct: "AJAX" },
      { text: "MySpace top friends?", options: ["4", "8", "12", "All"], correct: "8" },
      { text: "Early video king?", options: ["TikTok", "Vine", "YouTube", "Reels"], correct: "YouTube" }
    ]
  },
  {
    id: 4, 
    label: "Pastel Phase",
    styles: "bg-rose-50 rounded-3xl border-4 border-rose-200 p-8 font-sans text-rose-900 min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-2 border-rose-300 bg-white text-rose-500 mb-6",
    btnStyle: "bg-rose-400 text-white rounded-2xl px-6 py-2 m-2 inline-block hover:bg-rose-500 transition-all",
    questions: [
      { text: "Relative to parent font size?", options: ["rem", "em", "px", "vh", "ch"], correct: "em" },
      { text: "Instagram aesthetic?", options: ["Gritty", "Pastel", "Neon", "Cyber", "Raw"], correct: "Pastel" },
      { text: "CSS Flexbox aim?", options: ["Colors", "Layouts", "Fonts", "Database", "Security"], correct: "Layouts" }
    ]
  },
  {
    id: 5, 
    label: "Flat Design",
    styles: "bg-emerald-500 rounded-none p-10 text-white min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-none border-2 border-white bg-transparent mb-6",
    btnStyle: "bg-white text-emerald-600 font-bold uppercase tracking-widest px-6 py-3 m-2 inline-block hover:opacity-90",
    questions: [
      { text: "SVG stands for?", options: ["Standard Video", "Scalable Vector", "Simple View", "Static Grid", "Secure Visual", "Super Video"], correct: "Scalable Vector" },
      { text: "Flat design lacks?", options: ["Colors", "Shadows", "Buttons", "Text", "Images", "Links"], correct: "Shadows" },
      { text: "Icon style?", options: ["Realistic", "Minimal", "3D", "Animated", "Heavy", "Blurred"], correct: "Minimal" }
    ]
  },
  {
    id: 6, 
    label: "Material Design",
    styles: "bg-white rounded-lg p-10 shadow-xl text-gray-800 min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-none bg-indigo-600 text-white shadow-lg mb-6",
    btnStyle: "bg-indigo-600 text-white rounded px-5 py-2 m-2 inline-block shadow-md hover:shadow-lg transition-shadow uppercase font-medium",
    questions: [
      { text: "typeof [] in JS?", options: ["array", "list", "object", "undefined", "null", "collection", "set"], correct: "object" },
      { text: "Google's design?", options: ["Glass", "Material", "Fluent", "Flat", "Metro", "Skeuo", "Neo"], correct: "Material" },
      { text: "Z-axis used for?", options: ["Rotation", "Shadows", "Color", "Width", "Height", "Text", "Scale"], correct: "Shadows" }
    ]
  },
  {
    id: 7, 
    label: "Dark Mode",
    styles: "bg-slate-900 rounded-2xl border border-slate-700 p-10 text-slate-100 min-h-[400px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-2 border-slate-600 bg-slate-800 text-cyan-400 mb-6",
    btnStyle: "bg-slate-800 text-slate-100 border border-slate-600 rounded-xl px-6 py-2 m-2 inline-block hover:bg-slate-700 transition-all",
    questions: [
      { text: "'1' + 1 - 1 = ?", options: ["11", "10", "1", "NaN", "Error", "0", "111", "9"], correct: "10" },
      { text: "Dark Mode hex?", options: ["#fff", "#000", "#eee", "#888", "#555", "#aaa", "#ccc", "#ddd"], correct: "#000" },
      { text: "OLED benefit?", options: ["Heat", "Battery", "Size", "Sound", "Speed", "Wifi", "Color", "Pixels"], correct: "Battery" }
    ]
  },
  {
    id: 8, 
    label: "Neumorphism",
    styles: "bg-[#e0e0e0] rounded-[40px] shadow-[20px_20px_60px_#bebebe] p-12 text-gray-700 min-h-[450px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-none bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] mb-10 text-gray-600",
    btnStyle: "bg-[#e0e0e0] rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] px-6 py-2 m-3 inline-block active:shadow-inner transition-all",
    questions: [
      { text: "useMemo primary use?", options: ["Value", "Function", "Render", "Data", "Delete", "Cache", "Route", "Loop", "State"], correct: "Value" },
      { text: "Shadow types used?", options: ["Inner", "Drop", "Both", "None", "Glow", "Outline", "Hard", "Soft", "Blur"], correct: "Both" },
      { text: "Main issue?", options: ["Contrast", "Color", "Font", "Weight", "Size", "Width", "Height", "Speed", "Load"], correct: "Contrast" }
    ]
  },
  {
    id: 9, 
    label: "Glassmorphism",
    styles: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 text-white min-h-[450px] relative",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md shadow-2xl mb-6 text-white",
    btnStyle: "bg-white/20 border border-white/30 backdrop-blur-md rounded-full px-6 py-2 m-2 inline-block hover:bg-white/30 transition-all",
    questions: [
      { text: "HTTP 418 code?", options: ["NotFound", "ServerError", "Teapot", "Success", "Forbidden", "Auth", "Gateway", "Conflict", "Gone", "NoContent"], correct: "Teapot" },
      { text: "Glass CSS property?", options: ["Opacity", "Blur", "Backdrop-filter", "Transparency", "Grayscale", "Invert", "Contrast", "Brightness", "Shadow", "Gradient"], correct: "Backdrop-filter" },
      { text: "Event Loop job?", options: ["Memory", "Async", "Parsing", "Compiling", "Linking", "Loading", "Fetching", "Routing", "Hosting", "Scaling"], correct: "Async" }
    ]
  },
  {
    id: 10, 
    label: "Hyper-Digital",
    styles: "bg-black border border-cyan-500/50 rounded-[3rem] p-16 text-cyan-400 min-h-[500px] relative overflow-hidden",
    titleStyle: "text-5xl font-extrabold font-sans p-4 rounded-2xl border-2 border-cyan-500 bg-black text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-6 animate-pulse",
    btnStyle: "bg-transparent border border-cyan-400 rounded-full px-6 py-2 m-2 inline-block hover:bg-cyan-400/20 transition-all",
    questions: [
      { text: "Gen Alpha brainrot?", options: ["Skibidi", "Epic", "Pog", "Swag", "Rofl", "Lulz", "Based", "Cringe", "6 7", "Bet", "Cap"], correct: "Skibidi" },
      { text: "Server Component site?", options: ["Browser", "Server", "Both", "Proxy", "Edge", "Cloud", "User", "Cache", "Host", "Local", "Dev"], correct: "Server" },
      { text: "Set lookup complexity?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)", "O(n!)", "O(2n)", "O(sqrt n)", "O(n log n)", "O(3)", "O(inf)", "O(0)"], correct: "O(1)" }
    ]
  }
];