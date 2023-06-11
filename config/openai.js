const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: "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"
});

const openAi = new OpenAIApi(configuration);

async function ask(prompt) {
  const response = await openAi.createCompletion({
    model: "text-davinci-002",
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

module.exports = {
  ask
}

//test
// ask("How many days are there in a week?")