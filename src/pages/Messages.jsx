import { useEffect, useRef, useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { conversations as seed } from "../data/mock.js";
import { SmileIcon, MicIcon, ImageIcon, HeartIcon } from "../components/Icons.jsx";

export function MessagesPage() {
  const [items, setItems] = useState(seed);
  const [activeId, setActiveId] = useState(seed[0].id);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [q, setQ] = useState("");
  const bodyRef = useRef(null);

  const active = items.find((conversation) => conversation.id === activeId);
  const filtered = items.filter((conversation) =>
    conversation.user.username.toLowerCase().includes(q.toLowerCase()),
  );

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [active.messages.length, typing]);

  const send = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    const message = { id: Math.random().toString(36), fromMe: true, text, time: "now" };
    setItems((all) =>
      all.map((conversation) =>
        conversation.id === activeId
          ? { ...conversation, messages: [...conversation.messages, message], preview: text }
          : conversation,
      ),
    );
    setText("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setItems((all) =>
        all.map((conversation) =>
          conversation.id === activeId
            ? {
                ...conversation,
                messages: [
                  ...conversation.messages,
                  { id: Math.random().toString(36), fromMe: false, text: "Got it!", time: "now" },
                ],
              }
            : conversation,
        ),
      );
    }, 1600);
  };

  return (
    <AppShell hideMobileTop>
      <div className="msg-layout">
        <div className="msg-list">
          <div className="msg-list-head">Messages</div>
          <div className="msg-search">
            <input value={q} onChange={(event) => setQ(event.target.value)} placeholder="Search" />
          </div>
          <div className="msg-items">
            {filtered.map((conversation) => (
              <div
                key={conversation.id}
                className={`msg-item${conversation.id === activeId ? " active" : ""}`}
                onClick={() => setActiveId(conversation.id)}
              >
                <div className="avatar-wrap">
                  <img src={conversation.user.avatar} alt="" />
                  {conversation.online && <span className="dot" />}
                </div>
                <div className="meta">
                  <div className="name">{conversation.user.username}</div>
                  <div className="preview">{conversation.preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="msg-window">
          <div className="msg-header">
            <img src={active.user.avatar} alt="" />
            <div>
              <div className="name">{active.user.username}</div>
              <div className="status">{active.online ? "Active now" : "Active yesterday"}</div>
            </div>
          </div>
          <div className="msg-body" ref={bodyRef}>
            {active.messages.map((message) => (
              <div key={message.id} className={`bubble ${message.fromMe ? "me" : "them"}`}>
                {message.text}
              </div>
            ))}
            {typing && (
              <div className="typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
          <form className="msg-input" onSubmit={send}>
            <button type="button" className="tool" aria-label="Emoji">
              <SmileIcon />
            </button>
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Message..."
            />
            <button type="button" className="tool" aria-label="Image">
              <ImageIcon />
            </button>
            <button type="button" className="tool" aria-label="Voice">
              <MicIcon />
            </button>
            {text.trim() ? (
              <button type="submit">Send</button>
            ) : (
              <button type="button" className="tool" aria-label="Heart">
                <HeartIcon />
              </button>
            )}
          </form>
        </div>
      </div>
    </AppShell>
  );
}
