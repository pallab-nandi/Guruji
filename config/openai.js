if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.API_KEY
});

const openAi = new OpenAIApi(configuration);

async function ask(prompt) {
  const response = await openAi.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  const answer = response.data.choices[0].text;
  // console.log(answer);
  return answer;
}

async function draw(prompt) {
  const response = await openAi.createImage({
    prompt
  });

  const image = await response.data.data[0].url;
  // console.log(image);
  return image;
}

module.exports = {
  ask,
  draw
}

//test
// ask("How many days are there in a week?")
// draw("An elephant");