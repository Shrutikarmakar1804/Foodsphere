import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

export default function PaymentPage() {
  const [recurring, setRecurring] = useState(false);

  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        p: 4,
      }}
    >
      
      <Card
       
      sx={{ width: "100%", maxWidth: 1100, display: "flex", p: 4 }}>
        {/* LEFT SIDE - Payment Form */}
        <Box flex={2} pr={4}>
          {/* VAT and PO Number */}
          <Box display="flex" gap={2} mb={3}>
            <TextField
              label="VAT Number (optional)"
              fullWidth
              size="small"
            />
            <TextField
              label="PO Number (optional)"
              fullWidth
              size="small"
            />
          </Box>

          {/* Payment Method */}
          <Typography variant="h6" mb={2}>
            Payment Method
          </Typography>

          <Box display="flex" gap={2} mb={2}>
            {/* Payment icons placeholders */}
            <Box
              sx={{
                border: "1px solid #cbd5e1",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#fff",
              }}
            >
              💳
            </Box>
            <Box
              sx={{
                border: "1px solid #cbd5e1",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#fff",
              }}
            >
              🅥
            </Box>
            <Box
              sx={{
                border: "1px solid #cbd5e1",
                borderRadius: 2,
                p: 1,
                backgroundColor: "",
              }}
            >
              🅟
            </Box>
            <Box
              sx={{
                border: "1px solid #cbd5e1",
                borderRadius: 2,
                p: 1,
                backgroundColor: "#fff",
              }}
            >
              🅿️
            </Box>
          </Box>

          {/* Card Details */}
          <TextField
            label="Cardholder Name"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Card Number"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />
          <Box display="flex" gap={2} mb={2}>
            <TextField label="Date" size="small" fullWidth />
            <TextField label="CCV" size="small" fullWidth />
          </Box>

          {/* Credit card processing note */}
          <Typography variant="body2" color="text.secondary" mb={2}>
            <InfoOutlined fontSize="small" sx={{ verticalAlign: "middle" }} />{" "}
            Credit Card payments may take up to 24h to be processed
          </Typography>

          {/* Save card checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label="Save my payment details for future purchases"
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 3 }} />

          {/* Enable recurring payments */}
          <Typography variant="subtitle2" mb={1}>
            Enable recurring payments{" "}
            <Typography
              component="span"
              color="success.main"
              fontWeight="bold"
            >
              (Highly recommended)
            </Typography>
          </Typography>
          <Typography variant="caption" display="block" mb={2}>
            Never run out of balance when sending campaigns! You can change
            settings anytime.
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
              />
            }
            label=""
          />
        </Box>

        {/* RIGHT SIDE - Order Summary */}
        <Box
          flex={1}
          sx={{
            backgroundColor: "",
            borderRadius: 3,
            p: 3,
            height: "fit-content",
          }}
        >
          <Typography variant="h6" mb={3}>
            Order Summary
          </Typography>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Balance amount:</Typography>
            <Typography>€100.00</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>VAT (21%):</Typography>
            <Typography>€21.00</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">€121.00</Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#2563eb",
              ":hover": { backgroundColor: "#1d4ed8" },
              borderRadius: 2,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Confirm your order
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
