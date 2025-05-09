import React, { useState, useEffect } from 'react';

const DiscordWidget = () => {
  const [discordData, setDiscordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const guildId = process.env.REACT_APP_DISCORD_GUILD_ID || '1369345308269477949';
  
  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Discord data');
        }
        
        const data = await response.json();
        setDiscordData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchDiscordData();
  }, [guildId]);
  
  if (loading) {
    return (
      <div className="bg-gray-900 rounded-xl shadow-soft p-6 animate-pulse">
        <div className="h-8 bg-gray-800 rounded mb-4"></div>
        <div className="h-6 bg-gray-800 rounded mb-3 w-3/4"></div>
        <div className="h-6 bg-gray-800 rounded mb-6 w-1/2"></div>
        <div className="space-y-3">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="h-5 bg-gray-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-gray-900 rounded-xl shadow-soft p-6">
        <h3 className="text-xl font-bold text-white mb-3">Discord Community</h3>
        <p className="text-gray-400 mb-4">
          Unable to load Discord widget. Please check back later.
        </p>
        <a 
          href="https://discord.gg/fjx-development" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary inline-block"
        >
          Join our Discord
        </a>
      </div>
    );
  }
  
  return (
    <div id="discord" className="bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{discordData.name}</h3>
        <p className="text-gray-400 mb-4">
          {discordData.presence_count} members online • {discordData.members?.length || 0} shown
        </p>
        
        {discordData.members && discordData.members.length > 0 && (
          <div className="space-y-3 mb-6">
            {discordData.members.slice(0, 8).map((member) => (
              <div key={member.id} className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src={member.avatar_url} 
                    alt={member.username} 
                    className="w-8 h-8 rounded-full"
                  />
                  <span 
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900
                      ${member.status === 'online' ? 'bg-green-500' : 
                        member.status === 'idle' ? 'bg-yellow-500' : 
                        member.status === 'dnd' ? 'bg-red-500' : 'bg-gray-500'
                      }
                    `}
                  ></span>
                </div>
                <span className="text-gray-300">{member.username}</span>
                {member.game && (
                  <span className="text-gray-500 text-sm">Playing {member.game.name}</span>
                )}
              </div>
            ))}
          </div>
        )}
        
        <a 
          href={discordData.instant_invite} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary w-full"
        >
          Join our Discord
        </a>
      </div>
      
      <div className="border-t border-gray-800">
        <iframe 
          src={`https://discord.com/widget?id=${guildId}&theme=dark`} 
          width="100%" 
          height="350" 
          allowTransparency="true" 
          frameBorder="0" 
          title="Discord Widget"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="block"
        ></iframe>
      </div>
    </div>
  );
};

export default DiscordWidget;