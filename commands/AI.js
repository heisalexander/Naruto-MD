const {king} = require("../france/king");
const {default: axios} = require("axios");
king({nomCom: "narsh", reaction: "📡", categorie: "AI"}, async (_0x58db7e, _0x1c9ca4, _0x3bb324) => {
  const {repondre: _0x1ad64e, ms: _0x320411, arg: _0x821059} = _0x3bb324;
  if (!_0x821059 || !_0x821059[0]) {
    return _0x1ad64e("YEES!\n _I'm listening to you._");
  }
  try {
    const _0xf067fc = _0x821059.join(" ");
    const _0x3fced7 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0xf067fc);
    const _0x273e1c = await _0x3fced7.json();
    await _0x1ad64e(_0x273e1c.cnt);
  } catch {
    _0x1ad64e("something went wrong...");
  }
});
king({nomCom: "dalle", reaction: "📡", categorie: "AI"}, async (_0x22ef9c, _0x5287a8, _0x2ccd49) => {
  const {repondre: _0x2b1a81, arg: _0x885e30, ms: _0x4eb9fe} = _0x2ccd49;
  try {
    if (!_0x885e30 || _0x885e30.length === 0) {
      return _0x2b1a81("Please enter the necessary information to generate the image.");
    }
    const _0x30bcaa = _0x885e30.join(" ");
    const _0x93b128 = "https://widipe.com/dalle?text=" + _0x30bcaa;
    _0x5287a8.sendMessage(_0x22ef9c, {image: {url: _0x93b128}, caption: "*powered by Naruto MD*"}, {quoted: _0x4eb9fe});
  } catch (_0x3fe80d) {
    console.error("Erreur:", _0x3fe80d.message || "Une erreur s'est produite");
    _0x2b1a81("Oops, an error occurred while processing your request");
  }
});
king({nomCom: "gpt", reaction: "📡", categorie: "AI"}, async (_0x46f0f9, _0x4186c0, _0x456b8f) => {
  const {repondre: _0x201e9d, arg: _0x3f1807, ms: _0x1468ab} = _0x456b8f;
  if (!_0x3f1807 || _0x3f1807.length === 0) {
    return _0x201e9d("Please ask a question.");
  }
  const _0x57e4cc = _0x3f1807.join(" ");
  const _0x342f76 = await fetch("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0x57e4cc);
  const _0x559f0e = await _0x342f76.json();
  await _0x201e9d(_0x559f0e.result);
  console.log(_0x559f0e.completion);
});
king({nomCom: "gemini", reaction: "🤗", categorie: "AI"}, async (_0x5b435e, _0x1a5e51, _0x2a8399) => {
  const {repondre: _0x46a993, arg: _0x4c8b26, ms: _0x2ebfb8} = _0x2a8399;
  if (!_0x4c8b26 || _0x4c8b26.length === 0) {
    return _0x46a993("Hello am *Naruto MD.* an Ai developed by Alexander.\n\n What help can I offer you today?.");
  }
  const _0xfb4535 = _0x4c8b26.join(" ");
  const _0x5bb3c7 = await fetch("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0xfb4535);
  const _0x4fcf69 = await _0x5bb3c7.json();
  await _0x46a993(_0x4fcf69.result);
  console.log(_0x4fcf69.completion);
});
king({nomCom: "calc", reaction: "🔢", categorie: "General"}, async (_0x2a01c5, _0xafa488, _0x1a93f6) => {
  const {repondre: _0x11087f, arg: _0x3e28b7, ms: _0x3720d6} = _0x1a93f6;
  if (!_0x3e28b7 || _0x3e28b7.length === 0) {
    return _0x11087f('Please insert maths calculations like 100000+2024.\n\nNOTE: Use "(/)" for division and "(*)" for multiplication or letter x');
  }
  const _0x3190d6 = _0x3e28b7.join(" ");
  const _0x17713d = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x3190d6);
  const _0x4f20aa = await _0x17713d.json();
  await _0x11087f(_0x4f20aa.result);
  console.log(_0x4f20aa.completion);
});
king({nomCom: "gpt4", reaction: "📡", categorie: "AI"}, async (_0x5a7396, _0x504136, _0x1ead50) => {
  const {repondre: _0x270954, arg: _0x13634e, ms: _0x208b8f} = _0x1ead50;
  try {
    if (!_0x13634e || _0x13634e.length === 0) {
      return _0x270954("Please ask a question.");
    }
    const _0x334eae = _0x13634e.join(" ");
    const _0x1aba4c = await axios.get("https://api.maher-zubair.tech/ai/chatgpt4?q=" + _0x334eae);
    const _0x10e0e9 = _0x1aba4c.data;
    if (_0x10e0e9) {
      _0x270954(_0x10e0e9.data);
    } else {
      _0x270954("Error during response generation.");
    }
  } catch (_0x39eebc) {
    console.error("Erreur:", _0x39eebc.message || "Une erreur s'est produite");
    _0x270954("Oops, an error occurred while processing your request.");
  }
});
king({nomCom: "best-wallp", reaction: "🙌", categorie: "Naruto MD PICS"}, async (_0x383089, _0x5f221f, _0x443e35) => {
  const {repondre: _0x53482f, arg: _0x59bce7, ms: _0x3dd4f0} = _0x443e35;
  const _0x230438 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x4ec65c = await _0x230438.json();
  const _0x451fb6 = _0x4ec65c.urls.regular;
  let _0xa87037 = {image: {url: _0x451fb6}, caption: "*POWERED BY Naruto MD*"};
  return await _0x5f221f.sendMessage(_0x383089, _0xa87037, {quoted: _0x3dd4f0});
});

