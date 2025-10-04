import React from "react";
import { Typography, Box } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

const TeamMemberCarousel = ({ members, onCardClick }) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      px: 2,
    }}
  >
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{
        mb: 3,
        fontSize: 14,
        fontStyle: "italic",
        opacity: 0.8,
      }}
    >
      👈 Deslize para conhecer toda a equipe 👉
    </Typography>

    <Box sx={{ width: "100%", maxWidth: "600px" }}>
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 15, // Reduzido para menos inclinação
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false, // Remove as sombras automáticas
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        style={{
          paddingBottom: "50px",
          paddingTop: "20px",
          "--swiper-pagination-color": "#90caf9",
          "--swiper-pagination-bullet-inactive-color": "#444",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            coverflowEffect: {
              rotate: 20,
              depth: 100,
              slideShadows: false,
            },
          },
          480: {
            slidesPerView: 1.4,
            coverflowEffect: {
              rotate: 18,
              depth: 110,
              slideShadows: false,
            },
          },
          600: {
            slidesPerView: 1.6,
            coverflowEffect: {
              rotate: 15,
              depth: 120,
              slideShadows: false,
            },
          },
        }}
      >
        {members.map((member, index) => (
          <SwiperSlide
            key={`${member.name}-${index}`}
            style={{
              width: "280px",
              height: "auto",
              background: "transparent", // Garante fundo transparente
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                transform: "translateZ(0)",
                transition: "all 0.3s ease",
                background: "transparent",
                "&:hover": {
                  transform: "translateZ(0) scale(1.02)",
                },
              }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
                style={{
                  height: "140px",
                  width: "100%",
                  maxWidth: "260px",
                  cursor: "pointer",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  opacity: 1, // Garante opacidade total
                }}
                onClick={() => onCardClick(member)}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

    <Typography
      variant="caption"
      color="text.secondary"
      align="center"
      sx={{
        mt: 1,
        fontSize: 12,
        opacity: 0.6,
      }}
    >
      {members.length} membros na equipe
    </Typography>
  </Box>
);

export default TeamMemberCarousel;