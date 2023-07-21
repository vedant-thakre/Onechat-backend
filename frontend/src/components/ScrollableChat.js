import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const applyTextFormatting = (content) => {
  // Add your text formatting logic here
  // For example, to add bold, italic, and strike formatting:
  const formattedContent = content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold: **text**
    .replace(/_(.*?)_/g, "<em>$1</em>") // Italic: _text_
    .replace(/~~(.*?)~~/g, "<s>$1</s>"); // Strike: ~~text~~

  return formattedContent;
};

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
              dangerouslySetInnerHTML={{
                __html: applyTextFormatting(m.content),
              }}
            />
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
