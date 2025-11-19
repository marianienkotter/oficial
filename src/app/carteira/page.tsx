"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Wallet, DollarSign, PiggyBank, Bitcoin, Briefcase } from "lucide-react";

// Dados simulados da carteira
const portfolioData = {
  total: 125000,
  rendaFixa: 45000,
  acoes: 35000,
  fiis: 20000,
  cripto: 15000,
  caixa: 10000,
  rentabilidadeTotal: 12.5,
  rentabilidade7d: 2.3,
  rentabilidade30d: 5.8,
  rentabilidade12m: 12.5,
};

// Dados para o gráfico de linha (evolução do patrimônio)
const evolutionData = [
  { mes: "Jan", valor: 100000 },
  { mes: "Fev", valor: 102000 },
  { mes: "Mar", valor: 105000 },
  { mes: "Abr", valor: 108000 },
  { mes: "Mai", valor: 112000 },
  { mes: "Jun", valor: 115000 },
  { mes: "Jul", valor: 118000 },
  { mes: "Ago", valor: 120000 },
  { mes: "Set", valor: 122000 },
  { mes: "Out", valor: 123000 },
  { mes: "Nov", valor: 124000 },
  { mes: "Dez", valor: 125000 },
];

// Dados para o gráfico de pizza (distribuição)
const distributionData = [
  { name: "Renda Fixa", value: portfolioData.rendaFixa, color: "#10b981" },
  { name: "Ações", value: portfolioData.acoes, color: "#3b82f6" },
  { name: "FIIs", value: portfolioData.fiis, color: "#8b5cf6" },
  { name: "Cripto", value: portfolioData.cripto, color: "#f59e0b" },
  { name: "Caixa", value: portfolioData.caixa, color: "#6b7280" },
];

export default function CarteiraPage() {
  const [periodo, setPeriodo] = useState("12m");
  const [simulacao, setSimulacao] = useState({
    valorInicial: "",
    aporteMensal: "",
    prazo: "",
    tipoInvestimento: "",
    perfilRisco: "",
  });
  const [resultadoSimulacao, setResultadoSimulacao] = useState<{
    valorFuturo: number;
    totalInvestido: number;
    totalJuros: number;
    rentabilidade: number;
  } | null>(null);

  const calcularSimulacao = () => {
    const inicial = parseFloat(simulacao.valorInicial) || 0;
    const aporte = parseFloat(simulacao.aporteMensal) || 0;
    const meses = parseInt(simulacao.prazo) || 0;

    // Taxas de retorno estimadas por tipo de investimento
    const taxas: { [key: string]: number } = {
      cdb: 0.009, // 0.9% ao mês
      tesouro: 0.008,
      acoes: 0.012,
      fiis: 0.01,
      cripto: 0.015,
      multimercado: 0.011,
    };

    const taxaMensal = taxas[simulacao.tipoInvestimento] || 0.01;

    // Cálculo de juros compostos com aportes mensais
    let valorFuturo = inicial;
    for (let i = 0; i < meses; i++) {
      valorFuturo = (valorFuturo + aporte) * (1 + taxaMensal);
    }

    const totalInvestido = inicial + aporte * meses;
    const totalJuros = valorFuturo - totalInvestido;
    const rentabilidade = ((valorFuturo - totalInvestido) / totalInvestido) * 100;

    setResultadoSimulacao({
      valorFuturo: Math.round(valorFuturo * 100) / 100,
      totalInvestido: Math.round(totalInvestido * 100) / 100,
      totalJuros: Math.round(totalJuros * 100) / 100,
      rentabilidade: Math.round(rentabilidade * 100) / 100,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            💰 Carteira Inteligente
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Gerencie seus investimentos e simule seu futuro financeiro
          </p>
        </div>

        {/* Visão Geral */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Wallet className="w-8 h-8" />
                Patrimônio Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold mb-4">{formatCurrency(portfolioData.total)}</div>
              <div className="flex items-center gap-2 text-emerald-100">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg">+{portfolioData.rentabilidadeTotal}% no período</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <PiggyBank className="w-4 h-4 text-emerald-600" />
                Renda Fixa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(portfolioData.rendaFixa)}</div>
              <p className="text-xs text-slate-500 mt-1">
                {((portfolioData.rendaFixa / portfolioData.total) * 100).toFixed(1)}% da carteira
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Ações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(portfolioData.acoes)}</div>
              <p className="text-xs text-slate-500 mt-1">
                {((portfolioData.acoes / portfolioData.total) * 100).toFixed(1)}% da carteira
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-600" />
                FIIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(portfolioData.fiis)}</div>
              <p className="text-xs text-slate-500 mt-1">
                {((portfolioData.fiis / portfolioData.total) * 100).toFixed(1)}% da carteira
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bitcoin className="w-4 h-4 text-orange-600" />
                Criptomoedas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(portfolioData.cripto)}</div>
              <p className="text-xs text-slate-500 mt-1">
                {((portfolioData.cripto / portfolioData.total) * 100).toFixed(1)}% da carteira
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-slate-600" />
                Caixa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(portfolioData.caixa)}</div>
              <p className="text-xs text-slate-500 mt-1">
                {((portfolioData.caixa / portfolioData.total) * 100).toFixed(1)}% da carteira
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Rentabilidade */}
        <Card>
          <CardHeader>
            <CardTitle>📊 Rentabilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">7 dias</p>
                <p className="text-2xl font-bold text-emerald-600">+{portfolioData.rentabilidade7d}%</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">30 dias</p>
                <p className="text-2xl font-bold text-emerald-600">+{portfolioData.rentabilidade30d}%</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">12 meses</p>
                <p className="text-2xl font-bold text-emerald-600">+{portfolioData.rentabilidade12m}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gráficos */}
        <Tabs defaultValue="evolucao" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="evolucao">Evolução do Patrimônio</TabsTrigger>
            <TabsTrigger value="distribuicao">Distribuição</TabsTrigger>
          </TabsList>

          <TabsContent value="evolucao">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>📈 Evolução do Patrimônio</CardTitle>
                  <Select value={periodo} onValueChange={setPeriodo}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1m">1 mês</SelectItem>
                      <SelectItem value="6m">6 meses</SelectItem>
                      <SelectItem value="12m">12 meses</SelectItem>
                      <SelectItem value="all">Tudo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={evolutionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "8px" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#10b981" strokeWidth={3} name="Patrimônio" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribuicao">
            <Card>
              <CardHeader>
                <CardTitle>🥧 Distribuição da Carteira</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Simulador de Investimentos */}
        <Card>
          <CardHeader>
            <CardTitle>🧮 Simulador de Investimentos</CardTitle>
            <CardDescription>Simule o crescimento do seu patrimônio ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="valorInicial">Valor Inicial (R$)</Label>
                <Input
                  id="valorInicial"
                  type="number"
                  placeholder="10000"
                  value={simulacao.valorInicial}
                  onChange={(e) => setSimulacao({ ...simulacao, valorInicial: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aporteMensal">Aporte Mensal (R$)</Label>
                <Input
                  id="aporteMensal"
                  type="number"
                  placeholder="1000"
                  value={simulacao.aporteMensal}
                  onChange={(e) => setSimulacao({ ...simulacao, aporteMensal: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prazo">Prazo (meses)</Label>
                <Input
                  id="prazo"
                  type="number"
                  placeholder="12"
                  value={simulacao.prazo}
                  onChange={(e) => setSimulacao({ ...simulacao, prazo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipoInvestimento">Tipo de Investimento</Label>
                <Select value={simulacao.tipoInvestimento} onValueChange={(value) => setSimulacao({ ...simulacao, tipoInvestimento: value })}>
                  <SelectTrigger id="tipoInvestimento">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdb">CDB</SelectItem>
                    <SelectItem value="tesouro">Tesouro Selic</SelectItem>
                    <SelectItem value="acoes">Ações</SelectItem>
                    <SelectItem value="fiis">FIIs</SelectItem>
                    <SelectItem value="cripto">Criptomoedas</SelectItem>
                    <SelectItem value="multimercado">Multimercado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="perfilRisco">Perfil de Risco</Label>
                <Select value={simulacao.perfilRisco} onValueChange={(value) => setSimulacao({ ...simulacao, perfilRisco: value })}>
                  <SelectTrigger id="perfilRisco">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservador">Conservador</SelectItem>
                    <SelectItem value="moderado">Moderado</SelectItem>
                    <SelectItem value="agressivo">Agressivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calcularSimulacao} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              Calcular Simulação
            </Button>

            {resultadoSimulacao && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Valor Futuro</p>
                  <p className="text-2xl font-bold text-emerald-600">{formatCurrency(resultadoSimulacao.valorFuturo)}</p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Investido</p>
                  <p className="text-2xl font-bold text-blue-600">{formatCurrency(resultadoSimulacao.totalInvestido)}</p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total de Juros</p>
                  <p className="text-2xl font-bold text-purple-600">{formatCurrency(resultadoSimulacao.totalJuros)}</p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Rentabilidade</p>
                  <p className="text-2xl font-bold text-orange-600">{resultadoSimulacao.rentabilidade.toFixed(2)}%</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
