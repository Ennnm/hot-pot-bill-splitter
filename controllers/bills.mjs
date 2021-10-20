export default function initBillsController(db) {
  const create = async (req, res) => {
    const { name } = req.body;
    console.log('req.body :>> ', req.body);
    try {
      const newBill = await db.Bill.create({ name });
      res.send(newBill);
    }
    catch (error) {
      console.log('error in creating  :>> ', error);
      res.status(500).send('error in creating new bill');
    }
  };

  return {
    create,
  };
}
