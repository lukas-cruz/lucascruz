import React, { useState, useEffect } from 'react';
import { DollarSign, Cloud, Clock } from 'lucide-react';

export const InfoBar = () => {
  const [usdRate, setUsdRate] = useState<string | null>(null);
  const [temp, setTemp] = useState<number | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Fetch USD rate
    const fetchUsd = async () => {
      try {
        const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const data = await res.json();
        setUsdRate(parseFloat(data.USDBRL.bid).toFixed(2));
      } catch (error) {
        console.error('Error fetching USD rate:', error);
      }
    };

    // Fetch Weather (Goiânia)
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-16.6799&longitude=-49.255&current_weather=true');
        const data = await res.json();
        setTemp(Math.round(data.current_weather.temperature));
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchUsd();
    fetchWeather();

    // Refresh data every 5 minutes
    const dataInterval = setInterval(() => {
      fetchUsd();
      fetchWeather();
    }, 300000);

    return () => {
      clearInterval(timer);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <div className="bg-slate-900/50 border-b border-white/5 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-end items-center gap-6 text-[11px] font-mono uppercase tracking-wider text-slate-400">
        <div className="flex items-center gap-2">
          <DollarSign className="w-3 h-3 text-emerald-400" />
          <span>USD/BRL: <span className="text-white">{usdRate ? `R$ ${usdRate}` : '...'}</span></span>
        </div>
        
        <div className="flex items-center gap-2">
          <Cloud className="w-3 h-3 text-cyan-400" />
          <span>Goiânia: <span className="text-white">{temp !== null ? `${temp}°C` : '...'}</span></span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-blue-400" />
          <span className="text-white">{time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
};
