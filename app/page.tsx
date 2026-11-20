"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Clock3, FileQuestion, Gavel, LayoutDashboard, Menu, RotateCcw, Scale, ShieldCheck, Sparkles, Target, TrendingUp, UserRound, Users, X } from "lucide-react";
import { legalCases, legalQuestions, type LegalQuestion, type QuestionSection } from "@/lib/legal-content";

type View = "dashboard" | "test" | "case" | "profile" | "admin";
type TestMode = QuestionSection | "mixed";
type TestResult = { date: string; mode: TestMode; correct: number; total: number; startedAt?: string; durationSeconds?: number };
type ProgressState = { tests: TestResult[]; completedCases: number[] };
type Profile = { userId: string; email: string; fullName: string; university: string; faculty: string; course: string; groupName: string; role: "student" | "admin" };
type AccountState = { loading: boolean; authenticated: boolean; profile: Profile | null; user: { fullName: string; email: string } | null; isAdmin: boolean };
const emptyProgress: ProgressState = { tests: [], completedCases: [] };
const labels: Record<TestMode, string> = { general: "Criminal Law · General Part", special: "Criminal Law · Special Part", mixed: "Mixed assessment" };

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Home() {
  const [view, setView] = useState<View>("dashboard");
  const [mobileNav, setMobileNav] = useState(false);
  const [account, setAccount] = useState<AccountState>({ loading: true, authenticated: false, profile: null, user: null, isAdmin: false });
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === "undefined") return emptyProgress;
    try {
      const saved = localStorage.getItem("prolaw-ai-progress-v1");
      return saved ? JSON.parse(saved) as ProgressState : emptyProgress;
    } catch { return emptyProgress; }
  });

  const saveProgress = (next: ProgressState) => {
    setProgress(next);
    localStorage.setItem("prolaw-ai-progress-v1", JSON.stringify(next));
  };
  const refreshAccount = async () => {
    try {
      const response = await fetch("/api/me");
      if (!response.ok) { setAccount({ loading: false, authenticated: false, profile: null, user: null, isAdmin: false }); return; }
      const data = await response.json() as { authenticated: boolean; profile: Profile | null; user: { fullName: string; email: string }; isAdmin: boolean };
      setAccount({ loading: false, ...data });
      const attemptsResponse = await fetch("/api/attempts");
      if (attemptsResponse.ok) {
        const attempts = await attemptsResponse.json() as { tests: Array<Record<string, unknown>>; cases: Array<Record<string, unknown>> };
        setProgress({
          tests: attempts.tests.map(item => ({ date: String(item.completed_at), mode: String(item.mode) as TestMode, correct: Number(item.correct_count), total: Number(item.total_count) })),
          completedCases: [...new Set(attempts.cases.map(item => Number(item.case_number)))],
        });
      }
    } catch { setAccount(current => ({ ...current, loading: false })); }
  };
  useEffect(() => {
    // Initial account hydration follows the authenticated server response.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refreshAccount();
  }, []);
  const navigate = (next: View) => { setView(next); setMobileNav(false); };

  return <main className="min-h-screen bg-[#f4f8fc] text-[#10233f]">
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#dbe7f2] bg-white/95 px-4 backdrop-blur md:px-8">
      <button aria-label="Open navigation" className="rounded-xl p-2 text-[#0a3b78] md:hidden" onClick={() => setMobileNav(true)}><Menu /></button>
      <button className="flex items-center gap-3 text-left" onClick={() => navigate("dashboard")}>
        <Image src="/prolaw-ai-logo.png" alt="ProLaw AI" width={56} height={56} className="h-14 w-14 rounded-xl object-cover object-top" priority />
        <span><strong className="block text-xl tracking-[-0.03em] text-[#06265a]">ProLaw<span className="text-[#079ee4]">-AI</span></strong><span className="hidden text-xs font-medium tracking-wide text-[#64748b] sm:block">LEGAL LEARNING MVP</span></span>
      </button>
      {account.authenticated ? <button onClick={() => navigate("profile")} className="flex items-center gap-2 rounded-full bg-[#eaf6fd] px-3 py-2 text-xs font-bold text-[#0879c8]"><UserRound className="h-4 w-4" />{account.profile?.fullName ?? account.user?.fullName ?? "Complete profile"}</button> : <a href="/signin-with-chatgpt?return_to=/" className="rounded-full bg-[#073d82] px-4 py-2 text-xs font-bold text-white">Student sign in</a>}
    </header>
    <div className="mx-auto flex max-w-[1500px]">
      <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 border-r border-[#dbe7f2] bg-white p-5 md:flex md:flex-col">
        <Navigation active={view} onNavigate={navigate} isAdmin={account.isAdmin} />
        <div className="mt-auto rounded-2xl bg-[#061f46] p-4 text-white"><Scale className="mb-3 h-5 w-5 text-[#20b5ef]"/><p className="text-sm font-semibold">Expert-prepared content</p><p className="mt-1 text-xs leading-5 text-[#b9cee8]">100 test questions and 10 legal cases supplied by the ProLaw-AI legal team.</p></div>
      </aside>
      {mobileNav && <div className="fixed inset-0 z-50 bg-[#071a35]/55 md:hidden" onClick={() => setMobileNav(false)}><aside className="h-full w-72 bg-white p-5" onClick={event => event.stopPropagation()}><div className="mb-8 flex items-center justify-between"><strong className="text-xl">Menu</strong><button aria-label="Close navigation" onClick={() => setMobileNav(false)}><X /></button></div><Navigation active={view} onNavigate={navigate} isAdmin={account.isAdmin} /></aside></div>}
      <section className="min-w-0 flex-1 p-4 md:p-8 lg:p-10">
        {view === "dashboard" && <Dashboard progress={progress} onNavigate={navigate} />}
        {view === "profile" && <ProfileWorkspace account={account} onSaved={refreshAccount} />}
        {view === "admin" && account.isAdmin && <AdminWorkspace />}
        {(view === "test" || view === "case") && (!account.authenticated || !account.profile) && <AccessGate authenticated={account.authenticated} onProfile={() => navigate("profile")} />}
        {view === "test" && account.profile && <TestWorkspace onComplete={(result) => {
          saveProgress({ ...progress, tests: [result, ...progress.tests].slice(0, 20) });
          void fetch("/api/attempts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(result) });
        }} />}
        {view === "case" && account.profile && <CaseWorkspace completed={progress.completedCases} onComplete={(id, response) => {
          saveProgress({ ...progress, completedCases: [...new Set([...progress.completedCases, id])] });
          void fetch("/api/case-attempts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ caseNumber: id, response }) });
        }} />}
      </section>
    </div>
  </main>;
}

function Navigation({ active, onNavigate, isAdmin }: { active: View; onNavigate: (view: View) => void; isAdmin: boolean }) {
  const items = [{ id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard }, { id: "test" as View, label: "Test assessment", icon: FileQuestion }, { id: "case" as View, label: "Case studies", icon: Gavel }, { id: "profile" as View, label: "Student profile", icon: UserRound }, ...(isAdmin ? [{ id: "admin" as View, label: "Administration", icon: ShieldCheck }] : [])];
  return <nav className="space-y-2">{items.map(item => <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold ${active === item.id ? "bg-[#e8f5fd] text-[#075da9]" : "text-[#50677f] hover:bg-[#f2f7fb]"}`}><item.icon className="h-5 w-5" />{item.label}</button>)}</nav>;
}

function Dashboard({ progress, onNavigate }: { progress: ProgressState; onNavigate: (view: View) => void }) {
  const attempts = progress.tests.length;
  const answered = progress.tests.reduce((sum, item) => sum + item.total, 0);
  const correct = progress.tests.reduce((sum, item) => sum + item.correct, 0);
  const average = answered ? Math.round(correct / answered * 100) : 0;
  const recent = progress.tests.slice(0, 6).reverse();
  return <div className="mx-auto max-w-7xl">
    <div className="hero-grid relative overflow-hidden rounded-[36px] bg-[#041a3d] p-7 text-white shadow-[0_30px_90px_rgba(6,31,70,.24)] md:p-11">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#0da5e8]/25 blur-3xl" /><div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#275ee8]/20 blur-3xl" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]"><div><span className="inline-flex items-center gap-2 rounded-full border border-[#5bd6ff]/25 bg-[#0c3970]/70 px-4 py-2 text-xs font-bold tracking-[.16em] text-[#8be3ff]"><Sparkles className="h-4 w-4" />EXPERT LEGAL LEARNING</span><h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-.05em] md:text-6xl">Turn legal theory into confident decisions</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#bfd3e8]">Practise with expert-prepared criminal law assessments, solve realistic cases and track every learning milestone.</p><div className="mt-8 flex flex-wrap gap-3"><button onClick={() => onNavigate("test")} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0b8fd8] to-[#15b8ec] px-6 py-4 font-bold shadow-lg shadow-[#0a89cf]/20">Start smart assessment <ChevronRight className="h-5 w-5" /></button><button onClick={() => onNavigate("case")} className="rounded-2xl border border-white/20 bg-white/[.06] px-6 py-4 font-bold backdrop-blur hover:bg-white/10">Explore legal cases</button></div><div className="mt-8 flex flex-wrap gap-6 text-sm text-[#a9c1d9]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#4cd6a0]" />100 expert questions</span><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#4cd6a0]" />10 model case solutions</span><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#4cd6a0]" />Saved student progress</span></div></div><div className="relative mx-auto w-full max-w-sm"><div className="absolute inset-8 rounded-full bg-[#159de0]/20 blur-3xl" /><div className="relative rounded-[32px] border border-white/15 bg-white/[.08] p-7 backdrop-blur-xl"><div className="flex items-center justify-between"><div><p className="text-sm text-[#9db7d1]">Learning readiness</p><strong className="mt-1 block text-4xl font-black">{average}%</strong></div><div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0b8fd8]/20"><TrendingUp className="h-8 w-8 text-[#55d6ff]" /></div></div><div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#28d2ae] to-[#20b8ef]" style={{ width: `${average}%` }} /></div><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/[.07] p-4"><span className="text-xs text-[#9db7d1]">Assessments</span><strong className="mt-1 block text-2xl">{attempts}</strong></div><div className="rounded-2xl bg-white/[.07] p-4"><span className="text-xs text-[#9db7d1]">Cases reviewed</span><strong className="mt-1 block text-2xl">{progress.completedCases.length}/10</strong></div></div></div></div></div>
    </div>
    <div className="mt-7 grid gap-5 md:grid-cols-4"><Metric icon={FileQuestion} value="100" label="Expert questions" note="General and Special Parts" /><Metric icon={Gavel} value="10" label="Applied cases" note="With model legal reasoning" /><Metric icon={Award} value={String(attempts)} label="Completed tests" note={`${answered} answers recorded`} /><Metric icon={TrendingUp} value={`${average}%`} label="Average score" note={attempts ? "Based on real attempts" : "Your baseline starts here"} /></div>
    <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><section className="premium-card rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(26,67,110,.08)] md:p-8"><div className="flex items-start justify-between"><div><span className="text-xs font-black uppercase tracking-widest text-[#0a86d2]">Performance</span><h2 className="mt-2 text-2xl font-bold">Recent assessment trend</h2></div><span className="rounded-xl bg-[#eaf8f5] p-3 text-[#16815a]"><TrendingUp className="h-5 w-5" /></span></div>{recent.length ? <div className="mt-8 flex h-48 items-end gap-4 border-b border-[#e3ebf2] px-2">{recent.map((item, i) => { const value = Math.round(item.correct / item.total * 100); return <div key={item.date + i} className="flex flex-1 flex-col items-center gap-2"><span className="text-xs font-bold text-[#075da9]">{value}%</span><div className="w-full max-w-14 rounded-t-xl bg-gradient-to-t from-[#0754ad] to-[#19b9ec]" style={{ height: `${Math.max(value, 8)}%` }} /><span className="text-[11px] text-[#71859a]">{item.mode === "general" ? "GEN" : item.mode === "special" ? "SPEC" : "MIX"}</span></div>; })}</div> : <div className="mt-8 grid h-48 place-items-center rounded-2xl border border-dashed border-[#cfdde9] bg-[#f8fbfd] text-center text-[#71859a]"><div><TrendingUp className="mx-auto mb-3 h-8 w-8 text-[#8db9d4]" /><p className="font-semibold">Complete your first assessment</p><p className="mt-1 text-sm">Your score trend will appear here.</p></div></div>}</section><section className="premium-card rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(26,67,110,.08)] md:p-8"><span className="text-xs font-black uppercase tracking-widest text-[#0a86d2]">Case mastery</span><div className="mt-5 flex items-center gap-6"><div className="relative grid h-36 w-36 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#0a92d2 ${progress.completedCases.length * 10}%, #e7eff5 0)` }}><div className="grid h-28 w-28 place-items-center rounded-full bg-white text-center"><div><strong className="text-3xl text-[#073d82]">{progress.completedCases.length}</strong><span className="block text-xs text-[#71859a]">of 10 cases</span></div></div></div><div><h2 className="text-2xl font-bold">Applied reasoning</h2><p className="mt-2 text-sm leading-6 text-[#60738a]">Compare your analysis with expert qualification and legal reasoning.</p><button onClick={() => onNavigate("case")} className="mt-4 text-sm font-bold text-[#0879c8]">Continue case library</button></div></div><div className="mt-7 grid gap-3"><InfoRow title="General Part" meta="50 expert questions" /><InfoRow title="Special Part" meta="50 expert questions" /></div></section></div>
    <p className="mt-6 text-center text-xs text-[#71859a]">Educational prototype. ProLaw-AI does not provide legal advice or replace official legislation.</p>
  </div>;
}

function TestWorkspace({ onComplete }: { onComplete: (result: TestResult) => void }) {
  const [mode, setMode] = useState<TestMode>("general");
  const [count, setCount] = useState(10);
  const [session, setSession] = useState<LegalQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [startedAt, setStartedAt] = useState("");
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!session || finished) return;
    const timer = window.setInterval(() => setElapsed(value => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [session, finished]);

  const start = () => {
    const pool = mode === "mixed" ? legalQuestions : legalQuestions.filter(q => q.section === mode);
    setSession(shuffle(pool).slice(0, Math.min(count, pool.length)));
    setIndex(0); setSelected(null); setAnswers([]); setFinished(false); setElapsed(0); setStartedAt(new Date().toISOString());
  };
  const submit = () => {
    if (selected === null || !session) return;
    const next = [...answers, selected];
    setAnswers(next);
    if (index === session.length - 1) {
      const correct = next.filter((answer, i) => answer === session[i].correctIndex).length;
      onComplete({ date: new Date().toISOString(), mode, correct, total: session.length, startedAt, durationSeconds: elapsed });
      setFinished(true);
    } else { setIndex(index + 1); setSelected(null); }
  };

  if (!session) return <div className="mx-auto max-w-4xl"><PageHeading eyebrow="Assessment setup" title="Test assessment" description="Select a section and test length. Questions are randomly selected for each attempt." /><div className="rounded-[28px] border border-[#d8e5f0] bg-white p-6 shadow-sm md:p-9"><h2 className="text-xl font-bold">1. Choose content</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{(["general", "special", "mixed"] as TestMode[]).map(value => <ChoiceButton key={value} active={mode === value} onClick={() => setMode(value)} title={labels[value]} note={value === "mixed" ? "Both sections" : "50 available questions"} />)}</div><h2 className="mt-8 text-xl font-bold">2. Choose test length</h2><div className="mt-4 flex flex-wrap gap-3">{[10, 25, 50].map(value => <button key={value} onClick={() => setCount(value)} className={`rounded-xl border px-5 py-3 font-bold ${count === value ? "border-[#087ed0] bg-[#eaf6fd] text-[#075da9]" : "border-[#d8e5f0]"}`}>{value} questions</button>)}</div><button onClick={start} className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#073d82] px-6 py-4 font-bold text-white">Start test <ChevronRight className="h-5 w-5" /></button></div></div>;

  const current = session[index];
  const score = answers.filter((answer, i) => answer === session[i].correctIndex).length;
  if (finished) return <div className="mx-auto max-w-4xl"><PageHeading eyebrow="Assessment complete" title="Your result" description={`${labels[mode]} · ${session.length} questions`} /><div className="rounded-[28px] border border-[#d8e5f0] bg-white p-6 md:p-9"><div className="flex flex-col gap-5 border-b pb-7 sm:flex-row sm:items-center"><div className="grid h-24 w-24 place-items-center rounded-full bg-[#e8f7ff] text-3xl font-black text-[#0879c8]">{Math.round(score / session.length * 100)}%</div><div><h2 className="text-3xl font-bold">{score} of {session.length} correct</h2><p className="mt-2 text-[#60738a]">Review every answer below. Incorrect answers show the expert key.</p></div></div><div className="mt-6 space-y-3">{session.map((q, i) => { const ok = answers[i] === q.correctIndex; return <div key={q.id} className={`rounded-2xl border p-5 ${ok ? "border-[#b9e5d2] bg-[#f2fbf7]" : "border-[#f2c8c8] bg-[#fff7f7]"}`}><div className="flex gap-3">{ok ? <CheckCircle2 className="shrink-0 text-[#14865b]" /> : <Target className="shrink-0 text-[#ca3d4e]" />}<div><strong>{q.question}</strong><p className="mt-2 text-sm text-[#536a82]">Your answer: {q.options[answers[i]]}</p>{!ok && <p className="mt-1 text-sm font-semibold text-[#0b67b2]">Correct answer: {q.options[q.correctIndex]}</p>}</div></div></div>; })}</div><button onClick={() => setSession(null)} className="mt-7 flex items-center gap-2 rounded-xl bg-[#073d82] px-5 py-3 font-bold text-white"><RotateCcw className="h-4 w-4" />New assessment</button></div></div>;

  const time = `${String(Math.floor(elapsed / 60)).padStart(2, "0")}:${String(elapsed % 60).padStart(2, "0")}`;
  return <div className="mx-auto max-w-5xl"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><PageHeading eyebrow={labels[mode]} title="Test in progress" description={`Question ${index + 1} of ${session.length}`} /><div className="mb-7 flex items-center gap-2 rounded-2xl border border-[#cfe0ed] bg-white px-4 py-3 font-mono font-bold text-[#075da9] shadow-sm"><Clock3 className="h-5 w-5" />{time}</div></div><div className="overflow-hidden rounded-[30px] border border-[#d8e5f0] bg-white shadow-[0_22px_65px_rgba(26,67,110,.1)]"><div className="flex items-center justify-between bg-[#061f46] px-6 py-4 text-sm text-white"><span>{current.section === "general" ? "General Part" : "Special Part"} · Source question {current.number}</span><span className="text-[#8bdcff]">{Math.round((index + 1) / session.length * 100)}% complete</span></div><div className="h-2 bg-[#e8f1f8]"><div className="h-full bg-gradient-to-r from-[#0754ad] to-[#19b9ec]" style={{ width: `${(index + 1) / session.length * 100}%` }} /></div><div className="p-6 md:p-10"><h2 className="max-w-4xl text-2xl font-bold leading-snug md:text-3xl">{current.question}</h2><div className="mt-8 grid gap-4">{current.options.map((option, optionIndex) => <button key={optionIndex} onClick={() => setSelected(optionIndex)} className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition ${selected === optionIndex ? "border-[#087ed0] bg-[#edf8ff] ring-2 ring-[#38bdf8]/20" : "border-[#dbe7f2] hover:-translate-y-0.5 hover:border-[#8bc7ea] hover:shadow-md"}`}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black ${selected === optionIndex ? "bg-[#0b67b2] text-white" : "bg-[#edf3f8] group-hover:bg-[#e0f2fc]"}`}>{["A", "B", "V", "G"][optionIndex]}</span><span className="font-semibold">{option}</span></button>)}</div><div className="mt-8 flex items-center justify-between gap-4"><span className="text-sm text-[#71859a]">{answers.length} answers saved in this session</span><button disabled={selected === null} onClick={submit} className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#073d82] to-[#0b67b2] px-7 py-4 font-bold text-white shadow-lg shadow-[#073d82]/15 disabled:opacity-40">{index === session.length - 1 ? "Finish assessment" : "Save and continue"}<ChevronRight className="h-5 w-5" /></button></div></div></div></div>;
}

function CaseWorkspace({ completed, onComplete }: { completed: number[]; onComplete: (id: number, response: string) => void }) {
  const [caseIndex, setCaseIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [revealed, setRevealed] = useState(false);
  const item = legalCases[caseIndex];
  const selectCase = (index: number) => { setCaseIndex(index); setResponse(""); setRevealed(false); };
  const reveal = () => { setRevealed(true); onComplete(item.number, response); };
  return <div className="mx-auto max-w-6xl"><PageHeading eyebrow="Expert case library" title="Legal case studies" description="Write your qualification first, then compare it with the legal team’s model solution." /><div className="grid gap-6 lg:grid-cols-[260px_1fr]"><aside className="rounded-[24px] border border-[#d8e5f0] bg-white p-4"><p className="px-2 text-xs font-black uppercase tracking-widest text-[#0a86d2]">10 cases</p><div className="mt-3 space-y-2">{legalCases.map((legalCase, index) => <button key={legalCase.id} onClick={() => selectCase(index)} className={`flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm ${index === caseIndex ? "bg-[#e8f5fd] font-bold text-[#075da9]" : "hover:bg-[#f4f8fc]"}`}><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${completed.includes(legalCase.number) ? "bg-[#dff5e9] text-[#16815a]" : "bg-[#edf3f8]"}`}>{completed.includes(legalCase.number) ? "✓" : legalCase.number}</span><span className="line-clamp-2">{legalCase.title}</span></button>)}</div></aside><section className="rounded-[28px] border border-[#d8e5f0] bg-white p-6 shadow-sm md:p-9"><span className="text-xs font-bold uppercase tracking-widest text-[#0a82ce]">Case {item.number} of 10</span><h2 className="mt-2 text-2xl font-bold">{item.title}</h2><div className="mt-6 rounded-2xl border-l-4 border-[#0a86d2] bg-[#f2f8fd] p-5 leading-7 text-[#294866]">{item.situation}</div><h3 className="mt-7 text-lg font-bold">Question</h3><p className="mt-2 leading-7">{item.prompt}</p><label className="mt-7 block text-sm font-bold" htmlFor="case-response">Your legal reasoning</label><textarea id="case-response" value={response} onChange={event => setResponse(event.target.value)} disabled={revealed} placeholder="State the qualification, relevant Criminal Code article and your reasoning..." className="mt-2 min-h-40 w-full rounded-2xl border border-[#cfdde9] p-4 leading-6 outline-none focus:border-[#0a86d2] disabled:bg-[#f6f8fa]" />{!revealed ? <button disabled={!response.trim()} onClick={reveal} className="mt-4 w-full rounded-xl bg-[#073d82] px-5 py-3.5 font-bold text-white disabled:opacity-40">Submit and view expert solution</button> : <div className="mt-6 space-y-4"><div className="rounded-2xl border border-[#b9e5d2] bg-[#f2fbf7] p-5"><h3 className="font-bold text-[#195d45]">Expert qualification</h3><p className="mt-2 leading-7 text-[#315c4d]">{item.qualification}</p></div><div className="rounded-2xl border border-[#c9dff0] bg-[#f5faff] p-5"><h3 className="font-bold text-[#164f7d]">Legal reasoning</h3><p className="mt-2 leading-7 text-[#365b78]">{item.reasoning}</p></div><div className="flex items-center justify-between gap-3"><button disabled={caseIndex === 0} onClick={() => selectCase(caseIndex - 1)} className="flex items-center gap-2 rounded-xl border px-4 py-3 font-bold disabled:opacity-30"><ChevronLeft className="h-4 w-4" />Previous</button><button disabled={caseIndex === legalCases.length - 1} onClick={() => selectCase(caseIndex + 1)} className="flex items-center gap-2 rounded-xl bg-[#073d82] px-4 py-3 font-bold text-white disabled:opacity-30">Next case<ChevronRight className="h-4 w-4" /></button></div></div>}</section></div></div>;
}

function AccessGate({ authenticated, onProfile }: { authenticated: boolean; onProfile: () => void }) {
  return <div className="mx-auto max-w-2xl rounded-[28px] border border-[#d8e5f0] bg-white p-8 text-center shadow-sm"><Users className="mx-auto h-12 w-12 text-[#0a86d2]" /><h1 className="mt-5 text-3xl font-black text-[#0a2e61]">{authenticated ? "Complete your student profile" : "Student sign-in required"}</h1><p className="mx-auto mt-3 max-w-lg leading-7 text-[#60738a]">{authenticated ? "Add your university, faculty, course and group before starting the pilot. Your assessment history will then be saved securely." : "Sign in so ProLaw-AI can save your test attempts, case activity and learning progress."}</p>{authenticated ? <button onClick={onProfile} className="mt-6 rounded-xl bg-[#073d82] px-6 py-3.5 font-bold text-white">Complete profile</button> : <a href="/signin-with-chatgpt?return_to=/" className="mt-6 inline-block rounded-xl bg-[#073d82] px-6 py-3.5 font-bold text-white">Sign in with ChatGPT</a>}</div>;
}

function ProfileWorkspace({ account, onSaved }: { account: AccountState; onSaved: () => Promise<void> }) {
  const [form, setForm] = useState({ fullName: account.profile?.fullName ?? account.user?.fullName ?? "", university: account.profile?.university ?? "", faculty: account.profile?.faculty ?? "", course: account.profile?.course ?? "", groupName: account.profile?.groupName ?? "" });
  const [status, setStatus] = useState("");
  if (!account.authenticated) return <AccessGate authenticated={false} onProfile={() => undefined} />;
  const save = async () => {
    setStatus("Saving...");
    const response = await fetch("/api/me", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
    if (!response.ok) { const data = await response.json() as { error?: string }; setStatus(data.error ?? "Could not save profile"); return; }
    await onSaved();
    setStatus("Profile saved");
  };
  const field = (key: keyof typeof form, label: string, placeholder: string) => <label className="block"><span className="text-sm font-bold">{label}</span><input value={form[key]} onChange={event => setForm({ ...form, [key]: event.target.value })} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-[#cfdde9] px-4 py-3 outline-none focus:border-[#0a86d2]" /></label>;
  return <div className="mx-auto max-w-3xl"><PageHeading eyebrow="Student identity" title="Your profile" description="These details help the pilot team analyse results by university, faculty, course and group." /><div className="rounded-[28px] border border-[#d8e5f0] bg-white p-6 shadow-sm md:p-9"><div className="grid gap-5 md:grid-cols-2">{field("fullName", "Full name", "Student name")}{field("university", "University", "Berdakh Karakalpak State University")}{field("faculty", "Faculty", "Faculty of Law")}{field("course", "Course", "2nd year")}{field("groupName", "Group", "LAW-201")}<label className="block"><span className="text-sm font-bold">Account email</span><input value={account.user?.email ?? ""} disabled className="mt-2 w-full rounded-xl border bg-[#f4f6f8] px-4 py-3 text-[#60738a]" /></label></div><div className="mt-7 flex flex-wrap items-center gap-4"><button onClick={save} className="rounded-xl bg-[#073d82] px-6 py-3.5 font-bold text-white">Save profile</button><span className="text-sm font-semibold text-[#16815a]">{status}</span>{account.profile && <a href="/signout-with-chatgpt?return_to=/" className="ml-auto text-sm font-bold text-[#9a3542]">Sign out</a>}</div></div></div>;
}

type AdminData = { totals: { students: number; tests: number; cases: number; average_score: number }; students: Array<Record<string, unknown>> };
function AdminWorkspace() {
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/admin/summary").then(async response => {
      if (!response.ok) throw new Error("Could not load administration data");
      setData(await response.json() as AdminData);
    }).catch(reason => setError(String(reason)));
  }, []);
  if (error) return <div className="rounded-2xl bg-[#fff1f2] p-5 text-[#8d3440]">{error}</div>;
  if (!data) return <div className="p-10 text-center text-[#60738a]">Loading pilot statistics...</div>;
  return <div className="mx-auto max-w-6xl"><PageHeading eyebrow="Pilot administration" title="Student activity" description="Registered students, completed assessments and case-study participation." /><div className="grid gap-5 md:grid-cols-4"><Metric value={String(data.totals.students)} label="Students" note="Registered profiles" /><Metric value={String(data.totals.tests)} label="Tests" note="Completed attempts" /><Metric value={String(data.totals.cases)} label="Cases" note="Submitted responses" /><Metric value={`${data.totals.average_score}%`} label="Average score" note="Across all attempts" /></div><div className="mt-7 overflow-x-auto rounded-[24px] border border-[#d8e5f0] bg-white"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-[#061f46] text-white"><tr>{["Student","University / Faculty","Course / Group","Attempts","Average","Last test"].map(label => <th key={label} className="px-5 py-4">{label}</th>)}</tr></thead><tbody>{data.students.map((student, index) => <tr key={String(student.user_id)} className={index % 2 ? "bg-[#f7fafc]" : ""}><td className="px-5 py-4"><strong>{String(student.full_name)}</strong><span className="block text-xs text-[#71859a]">{String(student.email)}</span></td><td className="px-5 py-4">{String(student.university)}<span className="block text-xs text-[#71859a]">{String(student.faculty)}</span></td><td className="px-5 py-4">{String(student.course)}<span className="block text-xs text-[#71859a]">{String(student.group_name)}</span></td><td className="px-5 py-4 font-bold">{String(student.attempts)}</td><td className="px-5 py-4 font-bold text-[#075da9]">{String(student.average_score)}%</td><td className="px-5 py-4 text-[#60738a]">{student.last_test ? new Date(String(student.last_test)).toLocaleDateString() : "—"}</td></tr>)}</tbody></table></div></div>;
}

function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="mb-7"><span className="text-xs font-black uppercase tracking-[.18em] text-[#0a86d2]">{eyebrow}</span><h1 className="mt-2 text-3xl font-black tracking-[-.04em] text-[#0a2e61] md:text-4xl">{title}</h1><p className="mt-3 max-w-3xl leading-7 text-[#60738a]">{description}</p></div>; }
function Metric({ icon: Icon, value, label, note }: { icon?: typeof Target; value: string; label: string; note: string }) { return <div className="premium-card rounded-[24px] border border-white bg-white p-5 shadow-[0_14px_40px_rgba(26,67,110,.07)]"><div className="flex items-start justify-between"><div><strong className="text-3xl font-black text-[#073d82]">{value}</strong><p className="mt-1 font-bold">{label}</p><p className="mt-1 text-sm text-[#71859a]">{note}</p></div>{Icon && <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#e7f6fd] to-[#dff3ff] text-[#0879c8]"><Icon className="h-5 w-5" /></span>}</div></div>; }
function InfoRow({ title, meta }: { title: string; meta: string }) { return <div className="flex items-center gap-4 rounded-2xl border border-[#e1eaf2] p-4"><BookOpen className="h-5 w-5 text-[#0a86d2]" /><div><p className="font-bold">{title}</p><p className="text-sm text-[#71859a]">{meta}</p></div></div>; }
function ChoiceButton({ active, onClick, title, note }: { active: boolean; onClick: () => void; title: string; note: string }) { return <button onClick={onClick} className={`rounded-2xl border p-5 text-left ${active ? "border-[#087ed0] bg-[#edf8ff] ring-2 ring-[#38bdf8]/20" : "border-[#dbe7f2] hover:border-[#8bc7ea]"}`}><strong>{title}</strong><span className="mt-1 block text-sm text-[#71859a]">{note}</span></button>; }

