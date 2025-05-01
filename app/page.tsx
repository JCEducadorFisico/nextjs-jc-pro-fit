"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">JC FIT PRO</h1>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Label>Email</Label>
                <Input placeholder="Digite seu e-mail" />
                <Label>Senha</Label>
                <Input type="password" placeholder="Digite sua senha" />
                <Button className="w-full mt-4">Entrar</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cadastro">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Label>Nome completo</Label>
                <Input placeholder="João da Silva" />
                <Label>Email</Label>
                <Input placeholder="email@exemplo.com" />
                <Label>Senha</Label>
                <Input type="password" placeholder="Crie uma senha" />
                <Label>Objetivo</Label>
                <Textarea placeholder="Fale sobre seus objetivos..." />
                <Button className="w-full mt-4">Cadastrar</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {step === 1 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">1. Avaliação Inicial</h2>
            <div className="space-y-4">
              <Label>Altura (cm)</Label>
              <Input placeholder="Ex: 175" />
              <Label>Peso (kg)</Label>
              <Input placeholder="Ex: 70" />
              <Label>Cintura (cm)</Label>
              <Input placeholder="Ex: 80" />
              <Label>Quadril (cm)</Label>
              <Input placeholder="Ex: 95" />
              <Button className="mt-4" onClick={() => setStep(2)}>Próximo</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">2. Avaliação Postural</h2>
            <div className="space-y-4">
              <Label>Envie 1 foto de frente</Label>
              <Input type="file" />
              <Label>Envie 1 foto de perfil</Label>
              <Input type="file" />
              <Label>Envie 1 foto de costas</Label>
              <Input type="file" />
              <Button className="mt-4" onClick={() => setStep(3)}>Próximo</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">3. Avaliação de Condicionamento</h2>
            <div className="space-y-4">
              <Label>Consegue caminhar 6 minutos?</Label>
              <select className="bg-zinc-800 p-2 rounded w-full">
                <option>Sim</option>
                <option>Não</option>
              </select>
              <Label>Distância percorrida (m)</Label>
              <Input placeholder="Ex: 550" />
              <Label>Frequência cardíaca pós-teste</Label>
              <Input placeholder="Ex: 120 bpm" />
              <Button className="mt-4">Finalizar Avaliação</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
