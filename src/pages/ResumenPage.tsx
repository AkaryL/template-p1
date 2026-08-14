import { HeaderBar } from '../components/HeaderBar';
import { GaugeCard } from '../components/GaugeCard';
import { KpiCard } from '../components/KpiCard';
import { SentimentLineChart } from '../components/SentimentLineChart';
import { PlatformDonut } from '../components/PlatformDonut';
import { TopNewsPanel } from '../components/TopNewsPanel';
import { TopicsTable } from '../components/TopicsTable';
import { MexicoMap } from '../components/MexicoMap';
import { WordCloud } from '../components/WordCloud';
import { ActiveAlerts } from '../components/ActiveAlerts';
import { StrategyFooter } from '../components/StrategyFooter';
import { kpis, sparks } from '../data/mockData';

export function ResumenPage() {
  return (
    <div className="p-2.5 flex flex-col gap-2.5">
      <div className="grid gap-2.5" style={{ gridTemplateColumns: '1fr 180px 180px' }}>
        <HeaderBar />
        <GaugeCard
          title="Índice de Momentum"
          value={74}
          trend="8.6 pts"
          trendLabel="Tendencia favorable"
          variant="momentum"
        />
        <GaugeCard title="Riesgo Reputacional" value={72} variant="risk" riskLabel="MEDIO" />
      </div>

      <div className="grid grid-cols-6 gap-2.5">
        {kpis.map((k, i) => (
          <KpiCard key={k.label} {...k} color={k.color as never} data={sparks[i]} />
        ))}
      </div>

      <div className="grid gap-2.5" style={{ gridTemplateColumns: '4fr 3fr 3fr' }}>
        <SentimentLineChart />
        <PlatformDonut />
        <TopNewsPanel />
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        <TopicsTable />
        <MexicoMap />
        <WordCloud />
        <ActiveAlerts />
      </div>

      <StrategyFooter />
    </div>
  );
}
