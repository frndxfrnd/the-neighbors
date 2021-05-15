import '@compiled/react'
import 'twin.macro'

import { useEffect /* , useState */ } from 'react'
import { useTranslation } from 'react-i18next'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from '@/layouts/main'
import ExplorePage from '@/pages/explore'
import JoinUsPage from '@/pages/join-us'

export default () => {
  const { /* t, */ i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <MainLayout>
            <Switch>
              <Route path='/join'>
                <JoinUsPage />
              </Route>
              <Route path='/'>
                <ExplorePage />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  )

  // const [counter, setCounter] = useState(0)
  // const [listOfPosts, setListOfPosts] = useState([])
  // return (
  //   <main tw='absolute inset-0 flex flex-col justify-center items-center'>
  //     <button
  //       tw='bg-blue-50'
  //       onClick={
  //         () => {
  //           setListOfPosts(listOfPosts.concat([counter]))
  //           setCounter(counter + 1)
  //         }
  //       }
  //     >
  //       {t('click')}
  //     </button>
  //     {listOfPosts.map(id => <Post id={id} key={id} />)}
  //   </main>
  // )
}
