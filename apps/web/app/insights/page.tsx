"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MoreHorizontal,
  ThumbsUp,
  Send,
  Bookmark,
} from "lucide-react";

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Michael Roberts",
        title: "Product Designer at Stripe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        time: "2h",
      },
      content:
        "Just shipped a major redesign of our checkout flow. Reduced steps from 4 to 2 and saw a 23% increase in conversion. Sometimes less really is more.\n\nBig shoutout to the eng team for making this happen in just 3 weeks.",
      image: null,
      likes: 127,
      comments: 18,
      liked: false,
    },
    {
      id: 2,
      author: {
        name: "Emma Wilson",
        title: "Frontend Engineer at Vercel",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        time: "5h",
      },
      content:
        "Hot take: Most startups don't need microservices. A well-architected monolith will get you to Series A and beyond.\n\nSave yourself the operational complexity and just build.",
      image: null,
      likes: 284,
      comments: 42,
      liked: true,
    },
    {
      id: 3,
      author: {
        name: "James Chen",
        title: "Founder at BuildSpace",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        time: "1d",
      },
      content:
        "We're hiring! Looking for a senior full-stack engineer to join our small team.\n\nYou'll work on:\n• Real-time collaboration features\n• API design and scaling\n• React/Next.js frontend\n\nRemote-first, competitive salary + equity. DM me if interested.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      likes: 56,
      comments: 12,
      liked: false,
    },
  ];

  const [postStates, setPostStates] = React.useState(
    posts.reduce(
      (acc, post) => ({
        ...acc,
        [post.id]: { liked: post.liked, likes: post.likes },
      }),
      {},
    ),
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-2xl mx-auto py-6 px-4">
        {/* Create Post */}
        <div className="bg-white rounded-lg border border-zinc-200 p-4 mb-4">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <button className="flex-1 text-left px-4 py-3 border border-zinc-300 rounded-full text-zinc-600 hover:bg-zinc-50 transition-colors">
              Start a post
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg border border-zinc-200"
            >
              {/* Post Header */}
              <div className="p-4 pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {post.author.name}
                      </h3>
                      <p className="text-sm text-zinc-600">
                        {post.author.title}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {post.author.time} • 🌎
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                    <MoreHorizontal className="h-5 w-5 text-zinc-600" />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-zinc-900 whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="w-full">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              )}

              {/* Stats */}
              <div className="px-4 py-2 flex items-center justify-between text-sm text-zinc-600 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="flex items-center -space-x-1">
                    <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white">
                      <ThumbsUp className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-2 py-1 flex items-center justify-around">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-zinc-50 transition-colors text-zinc-600">
                  <Send className="h-5 w-5" />
                  <span className="font-medium text-sm">Share</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-zinc-50 transition-colors text-zinc-600">
                  <Bookmark className="h-5 w-5" />
                  <span className="font-medium text-sm">Save</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
