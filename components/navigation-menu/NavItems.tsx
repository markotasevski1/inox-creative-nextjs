export function NavItems() {
  const navItems = ['item1', 'item2', 'item3']
  return (
    <div className="flex gap-x-4">
      {navItems.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  )
}
