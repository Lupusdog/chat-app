import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

export const App: FC = () => {
  const [name,setName] = useState<string>("Unknown");
  const [nText,setNText] = useState<string>("");
  const [text,setText] = useState<string>("");
  const [chats,setChat] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onChangeNText = (e: ChangeEvent<HTMLInputElement>) => setNText(e.target.value);
  const onClickChangeName = () => {
    const newName = nText;
    setName(newName);
    setNText("");
  };
  const onClickAddText = () => {
    const newChats = [...chats];
    newChats.push(text);
    setChat(newChats);
    setText("");
  };

  return (
    <div>
      <h1>Night Code</h1>
      <h2>{`User:${name}`}</h2>
      <ul>
        {chats.map((chat,index) => (
        <li key={chat}>
          <div>
          <p>{`${name}:  ${chat}`}</p>
          </div>
         </li>
         ))}
      </ul>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAddText}>Chat送信</SButton>
      <input type="text" value={nText} onChange={onChangeNText} />
      <SButton onClick={onClickChangeName}>UserName変更</SButton>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
  margin-right: 16px;
`;



