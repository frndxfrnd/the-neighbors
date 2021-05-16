import '@compiled/react'
import 'twin.macro'

import { useEffect /* , useState */ } from 'react'
import { useTranslation } from 'react-i18next'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from '@/layouts/main'
import ExplorePage from '@/pages/explore'
import Login from '@/pages/sign-up'
import SignUp from '@/pages/sign-up2'
import JoinUsPage from '@/pages/join-us'
import Discover from '@/pages/discover'

export default () => {
  const { /* t, */ i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/discover'>
          <Discover />
        </Route>
        <Route path='/'>
          <MainLayout>
            <Switch>
              <Route path='/Login'>
                <Login />
              </Route>
              <Route path='/Discover'>
                <Discover />
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
