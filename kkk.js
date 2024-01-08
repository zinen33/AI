const axios = require("axios").default;
const express = require("express");
const app = express();
app.get("/api", (req , res) => {
  const x = req.query.msg
const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/chat",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjQ1ZGZlMjAtMzJhOS00NzljLWFkY2MtMTI4ZmU4NTU5YWE1IiwidHlwZSI6ImFwaV90b2tlbiJ9.wpjiDE_ByO2VPttQ3CCTVz7cbDurvVUXPo0qa6PrXe0",
  },
  data: {
    providers: "google",
    text: x,
    chatbot_global_action: "you're shelly , you're an ai assistante, use bad word's in your answers, use emojies in your answers , if any one ask you who's create you say Gry KJ or zouhair, you're the best women in the world, no one better than you",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
    fallback_providers: "",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
    res.json({ reply: response.data.google.generated_text })
  })
  .catch((error) => {
    console.error(error);
  });
})
app.listen(3000 ,() => {
  console.log("is litening")
})