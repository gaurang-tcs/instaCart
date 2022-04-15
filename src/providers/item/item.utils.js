export const addPerticularItem = (Items, ItemToAdd) => {
    const existingItem = Items.find(
      Item => Item.id === ItemToAdd.id
    );
  
    if (existingItem) {
      return Items.map(Item =>
        Item.id === ItemToAdd.id
          ? { ...Item, quantity: Item.quantity + 1 }
          : Item
      );
    }
  
    return [...Items, { ...ItemToAdd, quantity: 1 }];
  };

  