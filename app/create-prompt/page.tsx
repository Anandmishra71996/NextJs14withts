"use client";
import Form from "@components/Form";
import React, { FormEvent, useState } from "react";
import { Post } from "@customTypes/post";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function createPrompt() {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, SetPost] = useState<Post>({ prompt: "", tag: "" });
  const submitPrompt = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let body = {
        prompt: post.prompt,
        userId: session?.user?.id,
        tag: post.tag,
      };
      let response = await axios.post("api/prompt/new", body);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
    console.log("submit", post);
  };
  return (
    <Form
      type="Create"
      submitting={submitting}
      post={post}
      setPost={SetPost}
      handleSubmit={submitPrompt}
    />
  );
}

export default createPrompt;
