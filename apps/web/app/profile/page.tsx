'use client'
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Copy, Check } from 'lucide-react';

export default function UserProfile() {
  const [copied, setCopied] = React.useState('');

  const user = {
    name: "Sarah Chen",
    email: "sarah.chen@gmail.com",
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    bio: "Designer & developer. I make things for the web and sometimes they work.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  };

  const copy = (text:string, field:string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <Avatar className="h-20 w-20 ring-2 ring-offset-2 ring-zinc-200">
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex-1 pt-1">
            <h1 className="text-2xl font-semibold text-zinc-900 mb-1">{user.name}</h1>
            <p className="text-zinc-600">{user.bio}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-zinc-500 mb-2 block">Email</label>
            <div className="flex items-center gap-2">
              <span className="text-zinc-900">{user.email}</span>
              <button
                onClick={() => copy(user.email, 'email')}
                className="p-1.5 hover:bg-zinc-100 rounded transition-colors"
              >
                {copied === 'email' ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-500 mb-2 block">Wallet</label>
            <div className="flex items-center gap-2">
              <code className="font-mono text-sm text-zinc-900">
                {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
              </code>
              <button
                onClick={() => copy(user.walletAddress, 'wallet')}
                className="p-1.5 hover:bg-zinc-100 rounded transition-colors"
              >
                {copied === 'wallet' ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-400" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}