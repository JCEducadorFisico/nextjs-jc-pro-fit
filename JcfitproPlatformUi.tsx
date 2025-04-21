import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JcfitproPlatformUi() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">JC FIT PRO</h1>

      <Tabs defaultValue="aluno" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="aluno">Área do Aluno</TabsTrigger>
          <TabsTrigger value="coach">Área do Coach</TabsTrigger>
        </TabsList>

        <TabsContent value="aluno">
          <Card className="mb-4">
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Login do Aluno</h2>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Button className="w-full">Entrar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Ainda não tem conta?</h2>
              <Button variant="outline" className="w-full">Criar Conta</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coach">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Login do Coach</h2>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Button className="w-full">Entrar como Coach</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
