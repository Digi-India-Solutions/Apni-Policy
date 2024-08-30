const Form = require('../Model/Form.Model')

exports.CreateForm = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            address,
            zipCode,
            insuranceType,
            additionalInfo,
            planType,
            coverType,
            sumInsured,
            tenure,
            // businessType
        } = req.body;

        if (!fullName || !email || !phone || !address || !zipCode || !insuranceType || !additionalInfo || !planType || !coverType || !sumInsured || !tenure) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all fields'
            });
        }

        const newForm = new Form({
            fullName,
            email,
            phone,
            address,
            zipCode,
            insuranceType,
            additionalInfo,
            planType,
            coverType,
            sumInsured,
            tenure
        });

        // console.log(newForm);

        await newForm.save();

        res.status(200).json({
            success: true,
            message: 'Form created successfully',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


exports.GetAllForm = async (req, res) => {
    try {
        const FormData = await Form.find()
        res.status(200).json({
            success: true,
            message: 'Form data',
            data: FormData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.deleteSingleForm = async (req, res) => {
    try {
        const id = req.params.id
        const existingForm = await Form.findById(id)

        if (!existingForm) {
            return res.status(404).json({
                success: false,
                message: 'Form not found'
            })
        }

        await Form.findByIdAndDelete(existingForm)

        res.status(200).json({
            success: true,
            message: 'Form deleted successfully'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            mssg: 'Internal Server Error'
        })
    }
}

