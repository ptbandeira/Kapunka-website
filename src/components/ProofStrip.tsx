export default function ProofStrip() {
  const proofItems = [
    {
      title: "Glass",
      description: "Premium glass packaging for preservation"
    },
    {
      title: "Batch + Lot",
      description: "Full traceability on every unit"
    },
    {
      title: "QR to Method",
      description: "Instant access to application technique"
    },
    {
      title: "Bilingual Pack",
      description: "ES/PT + EN for accessibility"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {proofItems.map((item, index) => (
        <div key={item.title} className="text-center space-y-3 p-4 lg:p-6 border border-border">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full"></div>
          </div>
          <h3 className="font-heading text-base lg:text-lg text-foreground">{item.title}</h3>
          <p className="font-body text-xs lg:text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}