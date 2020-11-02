import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import Popup from '../Popup';
import videosRepository from '../../repositories/videos';
import { isAuthenticated } from "../../services/auth";

function Carrousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryId = category.id;
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          <Popup itemId={categoryId} tituloItem={categoryTitle}></Popup>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
                {isAuthenticated() ? (
                  <span style={{ paddingLeft: '5px' }}>
                  <button
                  className="excluir"
                  onClick={() => {
                      videosRepository.remove(video.id);                      
                  }}
                  >
                  </button>
                  </span>
                ) : (<span></span>)}
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carrousel;
