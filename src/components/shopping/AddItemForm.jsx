import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';

const categories = ['Alimentos', 'Bebidas', 'Higiene', 'Limpeza', 'Padaria', 'Açougue', 'Hortifruti', 'Outros'];

export default function AddItemForm({ onAdd, isAdding }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [category, setCategory] = useState('Outros');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !price || !quantity) return;

    const priceNum = parseFloat(price);
    const quantityNum = parseInt(quantity);

    if (priceNum <= 0 || quantityNum <= 0) return;

    onAdd({
      name,
      price: priceNum,
      quantity: quantityNum,
      category,
      subtotal: priceNum * quantityNum
    });

    setName('');
    setPrice('');
    setQuantity('1');
    setCategory('Outros');
  };

  return (
    <Card className="border-2 border-emerald-500 shadow-lg">
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Adicionar Item</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Produto</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Arroz 5kg"
              className="mt-1"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="price" className="text-sm font-medium">Preço (R$)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="quantity" className="text-sm font-medium">Quantidade</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="category" className="text-sm font-medium">Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12"
            disabled={isAdding}
          >
            <Plus className="w-5 h-5 mr-2" />
            Adicionar Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
