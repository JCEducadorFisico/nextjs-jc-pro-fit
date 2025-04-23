import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default App;
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">JC FIT PRO</h1>
      <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Cadastro</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="p-4">
            <Input placeholder="Email" type="email" className="mb-2" />
            <Input placeholder="Senha" type="password" className="mb-2" />
            <Button className="w-full">Entrar</Button>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card className="p-4">
            <Input placeholder="Nome completo" className="mb-2" />
            <Input placeholder="Email" type="email" className="mb-2" />
            <Input placeholder="Senha" type="password" className="mb-2" />
            <Button className="w-full">Cadastrar</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
