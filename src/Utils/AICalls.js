import OpenAI from "openai";


export async function AICALL(option){
    console.log(process.env.REACT_APP_Chat);
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_Chat,
        dangerouslyAllowBrowser: true,
    });

    // console.log(openai);
    const chatResponse = await openai.chat.completions.create(option);

    console.log("AICall",chatResponse);
    return chatResponse.choices[0].message.content;
}