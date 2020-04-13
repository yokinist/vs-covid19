import { h, FunctionalComponent, ComponentChild } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';
import { route } from 'preact-router';
import { SHEET_URL } from '../constants';
import { AppContainer } from '../containers';
import { SearchBox, Content, Header } from '../components';
import GlobalStyle from '../styles';

type MatchKeys = 'q' | 'targets' | 'categories';
export type RouteProps = {
  matches: { [key in MatchKeys]: string };
  url: string;
  path: string;
};

const Top: FunctionalComponent<RouteProps & ComponentChild> = props => {
  const [updatedParams, toggleUpdatedParams] = useState(false);
  const {
    fetchSupports,
    handleSetWord,
    handleSetTarget,
    handleSetCategory,
    supportsData,
    word,
    target,
    category,
  } = AppContainer.useContainer();

  const setStateFromParams = useCallback(() => {
    const { q, targets, categories } = props.matches;
    if (supportsData.status === 'success') {
      if (!updatedParams) {
        if (q) handleSetWord(q);
        if (targets) handleSetTarget(targets);
        if (categories) handleSetCategory(categories);
        toggleUpdatedParams(true);
        return;
      }
      if (!word && !target && !category) {
        route('/');
        return;
      }
    }
  }, [props.matches, supportsData.status]);

  useEffect(() => {
    fetchSupports(SHEET_URL);
  }, []);

  useEffect(() => {
    setStateFromParams();
  }, [setStateFromParams]);

  return (
    <div>
      <GlobalStyle />
      <SearchBox {...props} />
      <Header path={props.path} />
      <Content />
    </div>
  );
};

export default Top;
