import {
  Stack,
  IconButton,
  Typography,
  Container,
  useTheme,
  Divider,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const IconsSectionsBox = [
  {
    Icon: <ElectricBoltIcon />,
    Name: "Fast Delivery",
    Description: "Start from $5",
  },
  {
    Icon: <AccessAlarmIcon />,
    Name: "Money Garante",
    Description: "7 Days Back",
  },
  {
    Icon: <LocalAtmIcon />,
    Name: "365 Days",
    Description: "For Free Kargo",
  },
  { Icon: <PaymentIcon />, Name: "Payment", Description: "Start from $1" },
];

function IconsSeaction() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        p: 1,
        mt: 2,
        bgcolor: theme.palette.mode === "dark" ? "#0006" : "#fff",
        width: "100%",
        borderRadius: "5px",
      }}
    >
      {IconsSectionsBox.map((item) => (
        <Stack
          direction={"row"}
          key={item.Description}
          sx={{
            display: "flex",
            alignItems: "center",
            width: 250,
            gap: "5px",
            p: 1,
            justifyContent: "center",
            borderRight: {
              sm: "none",
              md: "1px solid #64748b",
              ":last-child": { borderRight: "none" },
            },
          }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <IconButton aria-label="">{item.Icon}</IconButton>
          <Stack divider={<Divider orientation="vertical" flexItem />}>
            <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
              {item.Name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color:
                  // @ts-ignore
                  theme.palette.neutral.main,
                ml: 1,
              }}
            >
              {item.Description}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Container>
  );
}

export default IconsSeaction;
