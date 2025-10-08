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
      px: { xs: 0, sm: 2 },
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

    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 340, sm: 600 },
        mx: "auto",
        overflow: "visible",
      }}
    >
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        spaceBetween={25}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        style={{
          paddingBottom: "40px",
          paddingTop: "16px",
          "--swiper-pagination-color": "#90caf9",
          "--swiper-pagination-bullet-inactive-color": "#444",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 1,
          },
        }}
      >
        {members.map((member, index) => (
          <SwiperSlide
            key={`${member.name}-${index}`}
            style={{
              width: "100%",
              height: "auto",
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: 160, sm: 180 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  minWidth: 0,
                  cursor: "pointer",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  opacity: 1,
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