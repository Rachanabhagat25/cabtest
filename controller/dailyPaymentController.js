import DailyPayments from "../model/dailyPaymentModel.js";

export const createDailyPayment = async (req, res) => {
    try {
    
        const paymentData = new DailyPayments(req.body);
        const savedPayment = await paymentData.save();

        res.status(200).json({ payment: savedPayment, message: "Payment Created Successfully." });
    } catch (error) {
        console.error("Create Payment Error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const fetch = async (req, res) => {
    try {
        const payments = await DailyPayments.find();
        if (payments.length === 0) {
            return res.status(404).json({ message: "Payments Not Found." });
        }
        res.status(200).json(payments);
    } catch (error) {
        console.error("Fetch Payments Error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const fetchById = async (req, res) => {
    try {
        const id = req.params.id;
        const payment = await DailyPayments.findById(id);
        if (!payment) {
            return res.status(404).json({ message: "Payment not found." });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.error("Fetch Payment by ID Error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const paymentExist = await DailyPayments.findOne({ _id: id });
        if (!paymentExist) {
            return res.status(404).json({ message: "Payment not found" });
        }
        const updatePayment = await DailyPayments.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ payment: updatePayment, message: "Payment Updated Successfully." });
    } catch (error) {
        console.error("Update Payment Error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};
export const deleteDailyPayment = async (req, res)=>{
    try {
        const id = req.params.id;
        const paymentExist = await DailyPayments.findOne({ _id: id });
        if (!paymentExist) {
            return res.status(404).json({ message: "Payment not found" });
        }
        await DailyPayments.findByIdAndDelete(id);
        res.status(201).json({message : " User deleted Successfully."});
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "});
    }    
    
}