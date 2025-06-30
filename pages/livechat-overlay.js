import Container from "@/components/container";
import VfLivechatOverlayDesktop from "@/components/viafoura/vf-livechat-overlay-desktop";
import VfLivechatOverlayMobile from "@/components/viafoura/vf-livechat-overlay-mobile";
import VfLivechatOverlayTablet from "@/components/viafoura/vf-livechat-overlay-tablet";

export default function LivechatOverlay() {
  return (
    <Container>
      <style global jsx>{`
        #vf-skeleton-container {
          margin: 0 !important;
        }
        .vf-skeleton-generic-block {
          border-radius: 0 !important;
        }
        .viafoura .vf-livechat__section {
          border-radius: 0 !important;
        }
        @media (max-width: 1280px) {
          #livechat-wrapper,
          .viafoura .vf-livechat__section {
            background: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.5) 50%,
              rgb(0, 0, 0) 100%
            ) !important;
          }
          .viafoura .vf-livechat__section {
            height: calc(100% - 0px) !important;
            border-color: rgb(67, 67, 67) !important;
          }
          .viafoura,
          .viafoura body,
          .vf-livechat__header__title,
          .vf-chat-content__timestamp,
          .vf-chat-footer__branding,
          .vf-livechat__start,
          .vf-content-text vf-chat-content__text span {
            color: #fff !important;
          }
          .viafoura,
          .viafoura .vf-loader-button__content svg,
          .viafoura .vf-livechat__header,
          .viafoura .vf-chat-form,
          .viafoura .vf-chat-form__content textarea {
            background-color: transparent !important;
            --background-color: #2a262b !important;
            border-color: rgb(82, 82, 82) !important;
          }
          .viafoura .vf-livechat__header {
            display: none !important;
          }
          .viafoura .vf-loader-button__content svg {
            fill: #fff !important;
          }
        }
      `}</style>

      <h1 className="mb-6 text-center">NBA Live Chat</h1>
      <div className="relative">
        <div className="lg:flex">
          <div className="w-full lg:relative xl:w-4/6">
            <iframe
              className="h-[470px] w-full"
              src="https://www.youtube.com/embed/j2kvgwLapKk?autoplay=1&mute=1&loop=1&playlist=j2kvgwLapKk"
              title="NBA Live Chat"
              allowFullScreen
            ></iframe>
            <VfLivechatOverlayTablet />
          </div>
          <VfLivechatOverlayDesktop />
        </div>
        <VfLivechatOverlayMobile />
      </div>
    </Container>
  );
}
